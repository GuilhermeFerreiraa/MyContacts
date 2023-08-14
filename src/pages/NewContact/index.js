/* eslint-disable no-console */
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactServices from '../../services/ContactServices';
import toast from '../../utils/toast';

export default function NewContact() {
  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await ContactServices.createContact(contact);

      toast({
        type: 'success',
        text: 'Contato criado com sucesso!',
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
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
