import { useEffect, useRef, useState } from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import ContactServices from '../../services/ContactServices';
import toast from '../../utils/toast';

export default function EditContact() {
  const { id } = useParams();

  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);

  const contactFormRef = useRef(null);
  const [contactName, setContactName] = useState('');

  useEffect(() => {
    const loadContact = async () => {
      try {
        const contact = await ContactServices.getContactById(id);

        contactFormRef.current.setFieldsValues(contact);

        setContactName(contact.name);

        setIsLoading((prevState) => !prevState);
      } catch {
        history.push('/');

        toast({
          type: 'error',
          text: 'contato não encontrado!',
        });
      }
    };

    loadContact();
  }, [id, history]);

  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

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

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar Alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
