import { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import toast from '../../utils/toast';
import ContactServices from '../../services/ContactServices';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';

export default function useEditContact() {
  const { id } = useParams();

  const history = useHistory();
  const safeAsyncAction = useSafeAsyncAction();

  const [isLoading, setIsLoading] = useState(true);

  const contactFormRef = useRef(null);
  const [contactName, setContactName] = useState('');

  useEffect(() => {
    const loadContact = async () => {
      try {
        const contact = await ContactServices.getContactById(id);

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contact);
          setIsLoading((prevState) => !prevState);
          setContactName(contact.name);
        });
      } catch {
        safeAsyncAction(() => {
          history.push('/');

          toast({
            type: 'error',
            text: 'contato não encontrado!',
          });
        });
      }
    };

    loadContact();
  }, [id, history, safeAsyncAction]);

  const handleSubmit = async (contact) => {
    try {
      const updatedContact = await ContactServices.updateContact(id, contact);
      setContactName(updatedContact.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
        duration: 3000,
      });
    } catch {
      toast({
        type: 'error',
        text: 'Erro ao editar o contato.',
      });
    }
  };

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
