import { useEffect, useState, useCallback } from 'react';
import { workers as dataWorkers } from 'config/data/workers';
import { groupBy } from 'utils/groupBy';

export const useWorkersState = () => {
  const [workers, setWorkers] = useState(dataWorkers);
  const [salaryPerDepartment, setSalaryPerDepartment] = useState({});
  const [displayedWorkers, setDisplayedWorkers] = useState(dataWorkers);

  useEffect(() => {
    const workersByDepartment = groupBy(displayedWorkers, 'department');
    const sumByDepartment = Object.fromEntries(
      Object.entries(workersByDepartment).map(([k, v]) => [k, v.map((worker) => +worker.salary).reduce((sum, curr) => sum + curr, 0)])
    );
    setSalaryPerDepartment(sumByDepartment);
  }, [displayedWorkers]);

  const addWorker = (worker) => {
    setWorkers([worker, ...workers]);
  };

  const applyFilters = useCallback(
    (filters) => {
      const filterDepartment = (worker) => {
        if (filters.department !== '') {
          return worker.department === filters.department;
        } else {
          return true;
        }
      };

      const filterMinSalary = (worker) => {
        if (filters.minSalary > 0) {
          return worker.salary >= filters.minSalary;
        } else {
          return true;
        }
      };

      const filterMaxSalary = (worker) => {
        if (filters.maxSalary > 0) {
          return worker.salary <= filters.maxSalary;
        } else {
          return true;
        }
      };

      const filterPerson = (worker) => {
        if (filters.person !== '') {
          return (
            worker.lastName.toLowerCase().includes(filters.person.toLowerCase()) ||
            worker.firstName.toLowerCase().includes(filters.person.toLowerCase())
          );
        } else {
          return true;
        }
      };

      const filteredWorkers = workers.filter((worker) => {
        return filterDepartment(worker) && filterMinSalary(worker) && filterMaxSalary(worker) && filterPerson(worker);
      });

      setDisplayedWorkers(filteredWorkers);
    },
    [workers]
  );

  useEffect(() => {
    applyFilters({
      department: '',
      minSalary: 0,
      maxSalary: 0,
      person: '',
    });
  }, [workers, applyFilters]);

  return {
    addWorker,
    workers: displayedWorkers,
    applyFilters,
    salaryPerDepartment,
  };
};
