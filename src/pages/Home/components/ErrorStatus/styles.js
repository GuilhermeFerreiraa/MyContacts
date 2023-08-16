import { styled } from 'styled-components';

export const Container = styled.div`
 margin-top: 16px;
 display: flex;
 justify-content: center;
 align-items: center;
 column-gap: 24px;

 .details {
  span {
   font-size: 22px;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.danger.main};
  }

  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: flex-start;
 }
`;
