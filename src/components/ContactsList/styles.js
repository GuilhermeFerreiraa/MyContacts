import { styled } from 'styled-components';

export const Container = styled.div`
 margin-top: 32px;
`;

export const Header = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-between;

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

  &:hover{
   background-color: ${({ theme }) => theme.colors.primary.main};
   color: #fff;
  }
 }
`;
