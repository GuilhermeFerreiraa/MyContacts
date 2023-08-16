/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Header({
  hasError,
  qtyOfContacts,
  qtyOfFilteredContacts,
}) {
  const alignment = hasError
    ? 'flex-end'
    : qtyOfContacts > 0
      ? 'space-between'
      : 'center';

  return (
    <Container justifycontent={alignment}>
      {!!(!hasError && qtyOfContacts) && (
      <strong>
        {`${qtyOfFilteredContacts}
     ${qtyOfFilteredContacts === 1 ? 'Contato' : 'Contatos'}
   `}
      </strong>
      )}
      <Link to="/new">Novo Contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtyOfContacts: PropTypes.number.isRequired,
  qtyOfFilteredContacts: PropTypes.number.isRequired,
};
