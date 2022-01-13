import React from 'react';
import { ViewWrapper } from '../../assets/styles/WorkersListView.styles';
import { WorkersList } from './WorkersList';
import { SearchWorkerForm } from './SearchWorkerForm';

export const WorkersListView = () => {
  return (
    <>
      <ViewWrapper>
        <SearchWorkerForm />
      </ViewWrapper>
      <ViewWrapper>
        <WorkersList />
      </ViewWrapper>
      <ViewWrapper>
        <div>Salary: 200</div>
      </ViewWrapper>
    </>
  );
};
