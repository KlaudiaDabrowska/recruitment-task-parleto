import styled from 'styled-components';

export const FormButton = styled.button`
  width: 100px;
  margin-top: ${({ theme }) => theme.spacing.m};
  padding: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primaryButtonBackground} 5%,
    ${({ theme }) => theme.colors.secondaryButtonBackground} 100%
  );
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.secondaryButtonBackground} 5%,
      ${({ theme }) => theme.colors.primaryButtonBackground} 100%
    );
  }

  @media (max-width: 411px) {
    margin-left: ${({ theme }) => theme.spacing.m};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
export const ModeButton = styled.button`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  border: none;
  border-right: 1px solid #c3c3c3ca;
  border-bottom: 1px solid #c3c3c3ca;
  cursor: pointer;

  &:focus {
    box-shadow: 9px 3px 10px 0px #c3c3c3ca;
  }

  &:last-child {
    border-right: none;
  }

  @media (max-width: 620px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
