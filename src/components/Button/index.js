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
      onClick={onClick}
      disabled={disabled || isLoading}
      danger={danger.toString()}
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
