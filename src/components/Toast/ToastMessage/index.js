import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({
  message, onRemoveMessage,
}) {
  const handleRemoveToast = () => {
    onRemoveMessage(message.id);
  };

  return (
    <Container
      tabIndex={0}
      role="button"
      type={message.type}
      onClick={handleRemoveToast}
    >
      {message.type !== 'default' && (
      <img
        src={message.type === 'error' ? xCircleIcon : checkCircleIcon}
        alt="icon-toast"
      />
      )}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'error']),
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
