import PropTypes from 'prop-types';
import React, { useEffect, memo } from 'react';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import { Container } from './styles';

function ToastMessage({
  message,
  onRemoveMessage,
  isLeaving,
  animatedRef,
}) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  const handleRemoveToast = () => {
    onRemoveMessage(message.id);
  };

  return (
    <Container
      tabIndex={0}
      role="button"
      isleaving={isLeaving ? 'true' : undefined}
      type={message.type}
      onClick={handleRemoveToast}
      ref={animatedRef}
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
    duration: PropTypes.number,
  }).isRequired,
  isLeaving: PropTypes.bool.isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};

export default memo(ToastMessage);
