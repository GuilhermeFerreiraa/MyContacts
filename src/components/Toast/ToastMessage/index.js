import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type !== 'default' && (
        <img src={type === 'error' ? xCircleIcon : checkCircleIcon} alt="icon-toast" />
      )}
      <strong>
        {text}
      </strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'error']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
