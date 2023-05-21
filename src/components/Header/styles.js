import { styled } from 'styled-components';

export const Container = styled.header`
 margin-top: 74px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

export const InputSearchContainer = styled.div`
 margin-top: 48px;
 width: 100%;

 input {
  width: 100%;
  border: none;
  border-radius: 25px;
  background-color: "#fff";
  height: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 15px 16px;
  font-size: 16px;
  color: #BCBCBC;
  outline: 0;

  &::placeholder {
   color: #BCBCBC;
  }
 }
`;
