import { useState } from 'react';
import { workers as dataWorkers } from 'config/data/workers';

export const useWorkersState = () => {
  const [workers, setWorkers] = useState(dataWorkers);

  return {
    setWorkers,
    workers,
  };
};
