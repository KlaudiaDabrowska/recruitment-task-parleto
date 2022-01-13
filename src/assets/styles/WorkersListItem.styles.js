import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const Salary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: black;
  /* color: ${({ theme }) => theme.colors.white}; */
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 5px;
  line-height: 19.16px;
`;

export const Department = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0 0 26px 20px;
  line-height: 12.4px;
`;
