/* eslint-disable no-console */
import { useRef } from 'react';
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactServices from '../../services/ContactServices';
import toast from '../../utils/toast';

export default function NewContact() {
  const contactFormRef = useRef(null);
  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

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

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm
        ref={contactFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Cadastrar"
      />
    </>
  );
}
