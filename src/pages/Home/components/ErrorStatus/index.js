import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import sad from '../../../../assets/images/sad.svg';
import Button from '../../../../components/Button';

export default function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="icon-bad" />
      <div className="details">
        <span>Ocorreu um erro ao obter os seus contatos!</span>
        <Button type="button" onClick={onTryAgain}>
          Tente Novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
