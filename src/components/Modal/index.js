import { PropTypes } from 'prop-types';
import { Container, Footer, Overlay } from './styles';
import Button from '../Button';
import ReactPortal from '../ReactPortal';

export default function Modal({
  title,
  cancelLabel,
  confirmLabel,
  children,
  danger,
  onCancel,
  onConfirm,
  visible,
  isLoading,
}) {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container danger={danger}>
          <h1>{title || 'Título do Modal'}</h1>
          <div className="modal-body">{children}</div>
          <Footer>
            <button
              type="button"
              disabled={isLoading}
              onClick={onCancel}
              className="cancel-button"
            >
              {cancelLabel}
            </button>
            <Button
              isLoading={isLoading}
              danger={danger}
              onClick={onConfirm}
              type="button"
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  isLoading: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  isLoading: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
