import React from 'react';
import { Header } from '../../assets/styles/Header.styles';
import { StyledList, Wrapper } from '../../assets/styles/WorkersList.styles';
import { workers } from '../../config/data/workers';
import { WorkersListItem } from './WorkersListItem';

export const WorkersList = () => {
  return (
    <>
      <Header>Workers list</Header>
      <StyledList>
        {workers.map((worker) => (
          <WorkersListItem key={worker.firstName} worker={worker} />
        ))}
      </StyledList>
    </>
  );
};
