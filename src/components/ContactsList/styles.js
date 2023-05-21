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

  &:hover {
   background-color: ${({ theme }) => theme.colors.primary.main};
   color: #fff;
  }
 }
`;

export const ListContainer = styled.div`
 margin-top: 24px;

 header {
  margin-bottom: 8px;

  button {
   column-gap: 8px;
   background: transparent;
   border: none;
   display: flex;
   align-items: center;

   span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};
   }
  }
 }
`;

export const Card = styled.div`
 background-color: #fff;
 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
 border-radius: 4px;
 padding: 16px;
 display: flex;
 align-items: center;
 justify-content: space-between;

 & + & {
  margin-top: 16px;
 }

 .info {
  .contact-name {
   display: flex;
   column-gap: 8px;
   align-items: center;

   small {
    background: ${({ theme }) => theme.colors.primary.lighter};
    color: ${({ theme }) => theme.colors.primary.main};
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 4px;
    padding: 4px;
   }
  }

  span {
   display: block;
   font-size: 14px;
   color: ${({ theme }) => theme.colors.gray[200]};
  }
 }

 .actions {
  display: flex;
  column-gap: 8px;
  align-items: center;

  button {
   background: transparent;
   border: none;
  }

  a {

  }
 }
`;
