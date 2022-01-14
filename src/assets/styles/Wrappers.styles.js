import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 600px;
  padding: 50px;
  border-radius: 25px;
  box-shadow: 20px 19px 15px -10px ${({ theme }) => theme.colors.primaryBackground};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
`;
