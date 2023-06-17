import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/delete.svg';
import edit from '../../assets/images/icons/edit.svg';
import formatPhone from '../../utils/formatPhone';
// import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');

  // console.log(orderBy);

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.error('error ', error);
      });
  }, [orderBy]);

  const handleToggleOrderBy = () => {
    const newOrder = orderBy === 'desc' ? 'asc' : 'desc';
    setOrderBy(newOrder);
  };

  return (
    <Container>
      {/* <Loader /> */}
      {/* <Modal
        danger
        description="Esta ação não poderá ser desfeita!"
        title={'Tem certeza que deseja remover o contato "Guilherme Ferreira" '}
      /> */}
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {' '}
          {contacts.length === 1 ? 'Contato' : 'Contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </ListHeader>

      {contacts.map((item) => (
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
    </Container>
  );
}
