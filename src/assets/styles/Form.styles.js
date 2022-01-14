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
  margin: 5px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  text-align: center;
`;

export const StyledInput = styled.input`
  width: 85%;
  margin-bottom: 15px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primaryBackground};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;

  &:focus {
    outline: none;
    box-shadow: 6px 7px 6px 0px ${({ theme }) => theme.colors.primaryBackground};
  }
`;

export const StyledSalary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledInputSalary = styled.input`
  width: 30%;
  margin: 15px;
  margin-top: 0px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primaryBackground};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;

  &:focus {
    outline: none;
    box-shadow: 6px 7px 6px 0px ${({ theme }) => theme.colors.primaryBackground};
  }
`;
