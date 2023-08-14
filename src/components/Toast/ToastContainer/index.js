/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import ToastMessage from '../ToastMessage';
import { toastEventManager } from '../../../utils/toast';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleAddToast = ({ type, text }) => {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    };

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
        />
      ))}
    </Container>
  );
}
