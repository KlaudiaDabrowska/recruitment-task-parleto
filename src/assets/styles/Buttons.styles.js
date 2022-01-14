import styled from 'styled-components';

export const SubmitButton = styled.button`
  padding: 7px;
  width: 100px;
  margin-top: ${({ theme }) => theme.spacing.m};
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
`;

export const ModeButton = styled.button`
  padding: 3px;
  width: 100px;
  margin-top: ${({ theme }) => theme.spacing.m};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.lightPrimaryBackground} 5%,
    ${({ theme }) => theme.colors.secondaryButtonBackground} 100%
  );
  color: ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  border: none;
  box-shadow: 3px -1px 4px 0px #899599;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.secondaryButtonBackground} 5%,
      ${({ theme }) => theme.colors.lightPrimaryBackground} 100%
    );
  }
`;
