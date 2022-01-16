import styled from 'styled-components';

export const WorkerNotFound = styled.div`
  margin-top: ${({ theme }) => theme.spacing.l};
  margin-bottom: ${({ theme }) => theme.spacing.l};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  color: red;
  text-align: center;
`;
