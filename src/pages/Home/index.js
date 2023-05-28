import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/delete.svg';
import formatPhone from '../../utils/formatPhone';
// import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.erro('error ', error);
      });
  }, []);

  // console.log(contacts);

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

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

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
      </ListContainer>
    </Container>
  );
}
