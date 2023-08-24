import { Container } from './styles';

import useHome from './useHome';

import Loader from '../../components/Loader';
import ErrorStatus from './components/ErrorStatus';
import Header from './components/Header';
import InputSearch from './components/InputSearchContainer';
import Modal from '../../components/Modal';

import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';

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
    handleCloseDeleteModal,
    handleChangeSearchTerm,
    handleConfirmDeleteContact,
  } = useHome();

  const hasContacts = !hasError && contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
      <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
      <>

        <ContactsList
          orderBy={orderBy}
          filteredContacts={filteredContacts}
          onToggleOrderBy={handleToggleOrderBy}
          onDeleteContact={handleDeleteContact}
        />

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
      </>
      )}
    </Container>
  );
}
