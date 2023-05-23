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
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <Modal
        danger
        description="Esta ação não poderá ser desfeita!"
        title={'Tem certeza que deseja remover o contato "Guilherme Ferreira" '}
      />
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
