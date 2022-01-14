import React from 'react';
import { Title } from '../../assets/styles/Header.styles';
import { StyledList } from '../../assets/styles/WorkersList.styles';
// import { workers } from '../../config/data/workers';
import { WorkersListItem } from './WorkersListItem';
// import { useWorkersState } from './useWorkersState';
import { ComponentWrapper } from 'assets/styles/Wrappers.styles';

export const WorkersList = ({ workers }) => {
  return (
    <ComponentWrapper>
      <Title>Workers list</Title>
      <StyledList>
        {workers.map((worker) => (
          <WorkersListItem key={worker.firstName} worker={worker} />
        ))}
      </StyledList>
    </ComponentWrapper>
  );
};
