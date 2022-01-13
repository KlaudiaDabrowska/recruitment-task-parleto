import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const StyledLabel = styled.label`
  margin: 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  text-align: center;
`;

export const StyledInput = styled.input`
  width: 90%;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding: 10px 8px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;

  &:focus {
    outline: none;
    box-shadow: 7px 6px 20px ${({ theme }) => theme.colors.colorTertiary};
  }
`;

export const StyledInputSalary = styled.input`
  width: 30%;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  margin: 10px;
  padding: 10px 8px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;

  &:focus {
    outline: none;
    box-shadow: 7px 6px 20px ${({ theme }) => theme.colors.colorTertiary};
  }
`;

export const StyledSalary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 7px 10px;
  margin-top: ${({ theme }) => theme.spacing.m};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.colorTertiary};
  border: 2px solid ${({ theme }) => theme.colors.colorTertiary};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
    background-color: ${({ theme }) => theme.colors.colorTertiary};
    opacity: 0.6;
  }
`;

export const Salary = styled.div`
  margin-top: 5px;
  color: #3b3939;
`;
