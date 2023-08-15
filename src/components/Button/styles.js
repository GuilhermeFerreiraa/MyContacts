import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
 color: #fff;
 padding: 0 16px;
 height: 52px;
 border: none;
 font-size: 16px;
 font-weight: bold;
 border-radius: 4px;
 border-radius: 4px;
 transition: all 0.2s ease-in;
 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
 background-color: ${({ theme }) => theme.colors.primary.main};
 display: flex;
 align-items: center;
 justify-content: center;

 &:hover {
  background-color: ${({ theme }) => theme.colors.primary.light};
 }

 &:active {
  background-color: ${({ theme }) => theme.colors.primary.dark};
 }

 &:disabled {
  background-color: #cccccc;
  cursor: default;
 }

 ${({ theme, danger }) => (danger === 'true'
    ? css`
        background: ${theme.colors.danger.main};

        &:hover {
          background-color: ${theme.colors.danger.light};
        }

        &:active {
          background-color: ${theme.colors.danger.dark};
        }
      `
    : '')}

`;
