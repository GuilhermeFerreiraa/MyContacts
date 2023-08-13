/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Container,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/delete.svg';
import edit from '../../assets/images/icons/edit.svg';
import formatPhone from '../../utils/formatPhone';
import Loader from '../../components/Loader';
import sad from '../../assets/images/sad.svg';
import ContactServices from '../../services/ContactServices';
import Button from '../../components/Button';
import box from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleToggleOrderBy = () => {
    const newOrder = orderBy === 'desc' ? 'asc' : 'desc';
    setOrderBy(newOrder);
  };

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactServices.listContacts(orderBy);
      // const contactsList = [];
      // await ContactServices.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredContacts = useMemo(
    () => contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [contacts, searchTerm],
  );

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTryAgain = () => {
    fetchData();
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
      <InputSearchContainer>
        <input
          type="text"
          value={searchTerm}
          placeholder="Pesquisar contato..."
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>
      )}

      <Header
        justifycontent={
     // eslint-disable-next-line no-nested-ternary
     hasError ? 'flex-end' : contacts.length > 0 ? 'space-between' : 'center'
    }
      >
        {!!(!hasError && contacts.length) && (
        <strong>
          {`${filteredContacts.length}
          ${filteredContacts.length === 1 ? 'Contato' : 'Contatos'}
        `}
        </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>

      {hasError && (
      <ErrorContainer>
        <img src={sad} alt="icon-bad" />
        <div className="details">
          <span>Ocorreu um erro ao obter os seus contatos!</span>
          <Button type="button" onClick={handleTryAgain}>
            Tente Novamente
          </Button>
        </div>
      </ErrorContainer>
      )}

      {!hasError && (
      <>
        {!isLoading && contacts.length < 1 && (
        <EmptyListContainer>
          <img src={box} alt="empty-box" />
          <p>
            Você ainda não tem nenhum contato cadastrado! Clique no botão
            {' '}
            <strong>"Novo Contato"</strong>
            {' '}
            acima para cadastrar o primeiro contato!
          </p>
        </EmptyListContainer>
        )}

        {(contacts.length > 0 && filteredContacts.length < 1) && (
        <SearchNotFoundContainer>
          <img src={magnifierQuestion} alt="magnifier-question" />
          <span>
            Nenhum resultado foi encontrado para
            {' '}
            <strong>{searchTerm}</strong>
          </span>
        </SearchNotFoundContainer>
        )}

        {filteredContacts.length > 2 && (
        <ListHeader orderby={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
        )}

        {filteredContacts.map((item) => (
          <Card key={item.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{item.name}</strong>
                {item.category_name && <small>{item.category_name}</small>}
              </div>
              <span>{item.email}</span>
              <span>{formatPhone(item.phone)}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${item.id}`}>
                <img src={edit} alt="edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="trash" />
              </button>
            </div>
          </Card>
        ))}
      </>
      )}
    </Container>
  );
}
