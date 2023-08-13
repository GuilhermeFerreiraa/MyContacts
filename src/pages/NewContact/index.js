/* eslint-disable no-console */
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactServices from '../../services/ContactServices';

export default function NewContact() {
  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const res = await ContactServices.createContact(contact);
      console.log(res);
    } catch (error) {
      console.error(`Erro: ${error.message}`);
      // eslint-disable-next-line no-alert
      alert('Ops.. Ocorreu um erro ao cadastrar novo contato.. Tente novamente mais tarde!');
    }
  };

  return (
    <>
      <PageHeader
        title="Novo Contato"
      />
      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
