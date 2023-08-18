/* eslint-disable no-console */
import React, { useEffect } from 'react';
import useAnimatedList from '../../../hooks/useAnimatedList';
import { toastEventManager } from '../../../utils/toast';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
  const {
    setItems: setMessages,
    handleRemoveItems,
    renderList,
  } = useAnimatedList();

  useEffect(() => {
    const handleAddToast = ({ type, text, duration }) => {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          type,
          text,
          duration,
        },
      ]);
    };

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Container>
      {renderList((message, { isleaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveItems}
          isLeaving={isleaving}
          animatedRef={animatedRef}
        />
      ))}
    </Container>
  );
}
