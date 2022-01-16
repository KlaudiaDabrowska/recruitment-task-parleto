import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
  }
`;

export const Salary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  @media (max-width: 620px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  @media (max-width: 620px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const Department = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: ${({ theme }) => theme.spacing.s};
  margin-top: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: right;
  @media (max-width: 620px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
