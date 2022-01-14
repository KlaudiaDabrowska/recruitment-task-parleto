import React, { useState } from 'react';
import { ButtonsWrapper, ComponentWrapper } from '../../assets/styles/Wrappers.styles';
import { WorkersList } from './WorkersList';
import { SearchWorkerForm } from './SearchWorkerForm';
import { AddWorkersForm } from './AddWorkersForm';
import { useWorkersState } from './useWorkersState';
import { ModeButton } from 'assets/styles/Buttons.styles';

export const MainView = () => {
  const { setWorkers, workers } = useWorkersState();
  const [selectedMode, setSelectedMode] = useState('');

  return (
    <>
      <ButtonsWrapper>
        <ModeButton onClick={() => setSelectedMode('search')}>Search</ModeButton>
        <ModeButton onClick={() => setSelectedMode('add')}>Add</ModeButton>
      </ButtonsWrapper>
      {selectedMode === 'search' ? <SearchWorkerForm /> : <AddWorkersForm setWorkers={setWorkers} workers={workers} />}
      <WorkersList workers={workers} />
      <ComponentWrapper>
        <div>Salary: 200</div>
      </ComponentWrapper>
    </>
  );
};
