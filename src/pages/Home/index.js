import { Link } from 'react-router-dom';
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
// import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

export default function Home() {
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
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Guilherme Ferreira</strong>
              <small>Instagram</small>
            </div>
            <span>email@email.com</span>
            <span>(11)94002-8922</span>
          </div>

          <div className="actions">
            <Link to="/edit/:id">
              <img src={edit} alt="edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

// top level await
fetch('http://localhost:3001/contacts')
  .then((response) => {
    console.log('response ', response);
  })
  .catch((error) => {
    console.log('error ', error);
  });

//  *apenas para navegadores*

// SOP -> Same Origin Policy -> Política de Mesma Origem

// CORS -> Cross-Origin Resource Sharing -> Compartilhamento de origens cruzadas

// Origem: protocolo://domnínio::porta - tudo o que não for protocolo domínio e porta não é considerado origem

// Saída -> onde a req esta sendo feita: http://localhost:3000
// Destino: onde a req está chegando: http://localhost:3000

// eslint-disable-next-line max-len
// toda vez que ferimos a politica de mesma origem (SAME ORIGIN) ela passa a ser considerada do tipo CORS
