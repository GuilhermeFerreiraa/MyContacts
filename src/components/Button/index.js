/* eslint-disable no-unneeded-ternary */
import PropTypes from 'prop-types';
import { StyledButton } from './styles';
import Spinner from '../Spinner';

export default function Button({
  children,
  type,
  isLoading,
  disabled,
  danger,
  onClick,
}) {
  return (
    <StyledButton
      type={type}
      danger={danger ? 'true' : undefined}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  danger: false,
  type: 'button',
  disabled: false,
  isLoading: false,
  onClick: () => {},
};
