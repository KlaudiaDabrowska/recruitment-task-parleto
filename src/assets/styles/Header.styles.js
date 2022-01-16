import styled from 'styled-components';

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.primaryText};
  text-shadow: 2px 1px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.m};

  @media (max-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
