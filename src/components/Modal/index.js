import { PropTypes } from 'prop-types';
import { Container, Footer, Overlay } from './styles';
import Button from '../Button';

export default function Modal({ title, description, danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  danger: false,
};
