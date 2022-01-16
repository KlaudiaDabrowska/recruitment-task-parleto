import React from 'react';
import { WorkersListItem } from './WorkersListItem';
import { Title } from '../../assets/styles/Header.styles';
import { StyledList } from '../../assets/styles/WorkersList.styles';
import { ComponentWrapper } from 'assets/styles/Wrappers.styles';
import { WorkerNotFound } from 'assets/styles/WorkerNotFound.styles';

export const WorkersList = ({ workers }) => {
  return (
    <ComponentWrapper>
      <Title>Workers list</Title>
      <StyledList>
        {workers.length === 0 ? (
          <WorkerNotFound>Worker not found</WorkerNotFound>
        ) : (
          workers.map((worker) => <WorkersListItem key={worker.firstName} worker={worker} />)
        )}
      </StyledList>
    </ComponentWrapper>
  );
};
