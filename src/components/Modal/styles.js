import { styled, keyframes } from 'styled-components';

const fadeIn = keyframes`
 from {
  /* intial styles */
  opacity: 0;
 }
 to {
  /* end animate */
  opacity: 1;
 }
`;

// const fadeOut = keyframes`
//  from {
//   /* intial styles */
//   opacity: 1;
//  }
//  to {
//   /* end animate */
//   opacity: 0;
//  }
// `;

const scaleIn = keyframes`
 from {
  /* intial styles */
  transform: scale(0);
 }
 to {
  /* end animate */
  transform: scale(1);
 }
`;

// const scaleOut = keyframes`
//  from {
//   /* intial styles */
//   transform: scale(1);
//  }
//  to {
//   /* end animate */
//   transform: scale(0);
//  }
// `;

export const Overlay = styled.div`
 background: rgba(0, 0, 0, 0.6);
 backdrop-filter: blur(5px);
 position: fixed;
 width: 100%;
 height: 100%;
 left: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 animation: ${fadeIn} 0.4s;
`;

export const Container = styled.div`
 background-color: #fff;
 border-radius: 4px;
 padding: 24px;
 max-width: 450px;
 width: 100%;
 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
 animation: ${scaleIn} 0.4s;


 > h1 {
  font-size: 22px;
  color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])};
 }

 .modal-body {
  margin-top: 32px;
 }
`;

export const Footer = styled.footer`
 display: flex;
 margin-top: 32px;
 column-gap: 24px;
 justify-content: flex-end;
 align-items: center;

 .cancel-button {
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray[200]};
  border: none;
  font-size: 16px;
 }

 &[disabled] {
  cursor: not-allowed;
 }
`;
