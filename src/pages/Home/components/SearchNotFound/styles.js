import { styled } from 'styled-components';

export const Container = styled.div`
 display: flex;
 margin-top: 16px;
 column-gap: 24px;
 align-items: flex-start;
 word-break: break-word;

 span {
  color: ${({ theme }) => theme.colors.gray[200]};
 }
`;
