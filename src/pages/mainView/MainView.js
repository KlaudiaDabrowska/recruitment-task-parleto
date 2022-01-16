import React, { useState } from 'react';
import { WorkersList } from './WorkersList';
import { SearchWorkerForm } from './SearchWorkerForm';
import { AddWorkersForm } from './AddWorkersForm';
import { useWorkersState } from './useWorkersState';
import { SalaryPerDepartment } from './SalaryPerDepartment';
import { ModeButtonsWrapper, ViewWrapper, ComponentWrapper } from '../../assets/styles/Wrappers.styles';
import { ModeButton } from 'assets/styles/Buttons.styles';

export const MainView = () => {
  const { addWorker, workers, applyFilters, salaryPerDepartment } = useWorkersState();
  const [selectedMode, setSelectedMode] = useState('');

  return (
    <>
      <ViewWrapper>
        <ModeButtonsWrapper>
          <ModeButton onClick={() => setSelectedMode('search')}>Search workers</ModeButton>
          <ModeButton onClick={() => setSelectedMode('add')}>Add new worker</ModeButton>
        </ModeButtonsWrapper>
        {selectedMode === 'add' ? (
          <AddWorkersForm addWorker={addWorker} applyFilters={applyFilters} />
        ) : (
          <SearchWorkerForm applyFilters={applyFilters} />
        )}
      </ViewWrapper>
      <WorkersList workers={workers} />
      <ComponentWrapper>
        <SalaryPerDepartment salaryPerDepartment={salaryPerDepartment} />
      </ComponentWrapper>
    </>
  );
};
