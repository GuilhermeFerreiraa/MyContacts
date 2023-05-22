import { styled } from 'styled-components';

export const Overlay = styled.div`
 background: rgba(0, 0, 0, 0.6);
 backdrop-filter: blur(5px);
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const Container = styled.div`
 background-color: #fff;
 border-radius: 4px;
 padding: 24px;
 height: 205px;
 max-width: 450px;
 width: 100%;
 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

 h1 {
  font-size: 22px;
 }

 p {
  margin-top: 8px;
 }
`;

export const Footer = styled.footer`
 display: flex;
 margin-top: 32px;
 column-gap: 8px;
 justify-content: flex-end;
 align-items: center;

 .cancel-button {
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray[200]};
  border: none;
  font-size: 16px;
 }
`;
