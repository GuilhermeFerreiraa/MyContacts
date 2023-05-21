import { styled } from 'styled-components';

export const Button = styled.button`
 color: #fff;
 width: 100%;
 height: 52px;
 border: none;
 font-size: 16px;
 font-weight: bold;
 border-radius: 4px;
 border-radius: 4px;
 transition: background 0.2s ease-in;
 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
 background-color: ${({ theme }) => theme.colors.primary.main};

 &:hover {
  background-color: ${({ theme }) => theme.colors.primary.light};
 }

 &:active {
  background-color: ${({ theme }) => theme.colors.primary.dark};
 }

 &:disabled {
  background-color: #CCCCCC;
  cursor: default;
 }
`;
