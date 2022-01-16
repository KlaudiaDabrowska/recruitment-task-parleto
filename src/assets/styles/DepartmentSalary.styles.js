import styled from 'styled-components';

export const DepartmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.spacing.s};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
  }

  @media (max-width: 620px) {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const DepartmentSalary = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;

  @media (max-width: 620px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
