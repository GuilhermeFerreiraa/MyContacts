import { styled } from 'styled-components';

export const Container = styled.header`
 display: flex;
 align-items: center;
 justify-content: ${({ justifycontent }) => justifycontent};
 margin-top: 32px;
 border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
 padding-bottom: 16px;

 strong {
  color: #222222;
  font-size: 24px;
 }

 a {
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary.main};
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in;

  &:hover {
   background-color: ${({ theme }) => theme.colors.primary.main};
   color: #fff;
  }
 }
`;
