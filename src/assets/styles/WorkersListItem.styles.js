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
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;

export const Department = styled.div`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: 12px;
  margin-top: 10px;
  text-align: right;
`;
