/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Container } from './styles';

import box from '../../../../assets/images/empty-box.svg';

export default function EmptyList() {
  return (
    <Container>
      <img src={box} alt="empty-box" />
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <strong>"Novo Contato"</strong> acima para cadastrar o primeiro contato!
      </p>
    </Container>
  );
}
