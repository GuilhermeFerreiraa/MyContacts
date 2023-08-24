/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import {
 useCallback,
 useDeferredValue,
 useEffect,
 useMemo,
 // useMemo,
 useState,
} from 'react';

import ContactServices from '../../services/ContactServices';
import toast from '../../utils/toast';

export default function useHome() {
 const [contacts, setContacts] = useState([]);
 const [orderBy, setOrderBy] = useState('asc');
 const [isLoading, setIsLoading] = useState(true);
 const [isLoadingDelete, setIsLoadingDelete] = useState(false);
 const [hasError, setHasError] = useState(false);
 const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
 const [contactBeingDeleted, setContactBeingDeleted] = useState(null);

 const [searchTerm, setSearchTerm] = useState('');

 const deferredSearchTerm = useDeferredValue('');

 const fetchData = useCallback(async () => {
  try {
   setIsLoading(true);
   const contactsList = await ContactServices.listContacts(orderBy);

   setHasError(false);
   setContacts(contactsList);
  } catch (error) {
   setHasError(true);
   setContacts([]);
  } finally {
   setIsLoading(false);
  }
 }, [orderBy]);

 useEffect(() => {
  fetchData();
 }, [fetchData]);

 const filteredContacts = useMemo(
  () => contacts.filter((contact) => contact.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())),
  [contacts, deferredSearchTerm],
 );

 const handleChangeSearchTerm = (event) => {
  setSearchTerm(event.target.value);
 };

 const handleTryAgain = () => {
  fetchData();
 };

 const handleDeleteContact = useCallback((contact) => {
  setIsDeleteModalVisible((prevState) => !prevState);
  setContactBeingDeleted(contact);
 }, []);

 const handleToggleOrderBy = useCallback(() => {
  const newOrder = orderBy === 'desc' ? 'asc' : 'desc';
  setOrderBy(newOrder);
 }, []);

 const handleCloseDeleteModal = () => {
  setIsDeleteModalVisible((prevState) => !prevState);
 };

 const handleConfirmDeleteContact = async () => {
  try {
   setIsLoadingDelete(true);

   await ContactServices.deleteContact(contactBeingDeleted.id);

   setContacts((prevState) => prevState.filter((contact) => contact.id !== contactBeingDeleted.id));

   handleCloseDeleteModal();

   toast({ type: 'success', text: 'Contato deletado com sucesso!' });
  } catch {
   toast({ type: 'error', text: 'Erro ao excluir contato!' });
  } finally {
   setIsLoadingDelete(false);
  }
 };

 return {
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
 };
}
