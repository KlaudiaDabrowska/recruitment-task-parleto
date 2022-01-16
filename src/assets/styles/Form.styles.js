import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  text-align: center;
  @media (max-width: 620px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledInput = styled.input`
  width: 85%;
  margin-bottom: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.colors.primaryBackground};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;

  &:focus {
    outline: none;
    box-shadow: 6px 7px 6px 0px ${({ theme }) => theme.colors.primaryBackground};
  }

  @media (max-width: 620px) {
    width: 80%;
  }
`;

export const StyledSalary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledInputSalary = styled.input`
  width: 30%;
  margin: ${({ theme }) => theme.spacing.s};
  margin-top: 0;
  padding: ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.colors.primaryBackground};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;

  &:focus {
    outline: none;
    box-shadow: 6px 7px 6px 0px ${({ theme }) => theme.colors.primaryBackground};
  }

  @media (max-width: 620px) {
    width: 26%;
  }
  @media (max-width: 360px) {
    width: 30%;
  }
`;
