/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import {
  Card,
  Container,
  EmptyListContainer,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader,
  SearchNotFoundContainer,
} from './styles';

import box from '../../assets/images/empty-box.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/delete.svg';
import edit from '../../assets/images/icons/edit.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';
import sad from '../../assets/images/sad.svg';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import formatPhone from '../../utils/formatPhone';
import useHome from './useHome';

export default function Home() {
  const {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    contacts,
    searchTerm,
    hasError,
    filteredContacts,
    orderBy,
    handleTryAgain,
    handleToggleOrderBy,
    handleDeleteContact,
    handleChangeSearchTerm,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        confirmLabel="Deletar"
        isLoading={isLoadingDelete}
        visible={isDeleteModalVisible}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
        title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
      >
        <p>Esta ação não pode ser desfeita!</p>
      </Modal>

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

        {contacts.length > 0 && filteredContacts.length < 1 && (
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

        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category.name && <small>{contact.category.name}</small>}
              </div>
              <span>{contact.email}</span>
              <span>{formatPhone(contact.phone)}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="edit" />
              </Link>
              <button type="button" onClick={() => handleDeleteContact(contact)}>
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
