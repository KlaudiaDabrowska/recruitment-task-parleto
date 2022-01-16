import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: ${({ theme }) => theme.spacing.l};
  margin-bottom: ${({ theme }) => theme.spacing.l};
  padding: ${({ theme }) => theme.spacing.l};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 20px 19px 15px -10px ${({ theme }) => theme.colors.primaryBackground};
  @media (max-width: 620px) {
    width: 90%;
  }
`;

export const ViewWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: ${({ theme }) => theme.spacing.l};
  margin-bottom: ${({ theme }) => theme.spacing.l};
  padding: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 20px 19px 15px -10px ${({ theme }) => theme.colors.primaryBackground};
  @media (max-width: 620px) {
    width: 90%;
  }
`;

export const ModeButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

export const FormButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  margin-top: ${({ theme }) => theme.spacing.s};
  margin-bottom: ${({ theme }) => theme.spacing.s};

  @media (max-width: 414px) {
    width: 65%;
  }
`;
