import React from 'react';
import { Wrapper, Salary, Name, Department } from '../../assets/styles/WorkersListItem.styles';

export const WorkersListItem = ({ worker: { firstName, lastName, department, salary, currency } }) => {
  return (
    <>
      <Department>
        {'Department: '}
        {department}
      </Department>
      <Wrapper>
        <Name>
          {firstName} {lastName}
        </Name>
        <Salary>
          {salary} {currency}
        </Salary>
      </Wrapper>
    </>
  );
};
