import { styled } from 'styled-components';

export const Container = styled.div`
 margin-top: 16px;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 16px;

 p {
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[200]};

  strong {
   color: ${({ theme }) => theme.colors.primary.main};
  }
 }
`;
