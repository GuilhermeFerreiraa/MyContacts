import { useRef } from 'react';
import ContactServices from '../../services/ContactServices';
import toast from '../../utils/toast';

export default function useNewContact() {
  const contactFormRef = useRef(null);
  const handleSubmit = async (contact) => {
    try {
      await ContactServices.createContact(contact);

      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contato criado com sucesso!',
        duration: 3000,
      });
    } catch {
      toast({
        type: 'error',
        text: 'Erro ao cadastrar o contato.',
      });
    }
  };

  return { contactFormRef, handleSubmit };
}
