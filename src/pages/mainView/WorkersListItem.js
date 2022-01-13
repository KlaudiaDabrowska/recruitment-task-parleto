import React from 'react';
import { Wrapper, Salary, Name, Department } from '../../assets/styles/WorkersListItem.styles';

export const WorkersListItem = ({ worker: { firstName, lastName, department, salary, currency } }) => {
  return (
    <Wrapper>
      <Salary>
        {salary} {currency}{' '}
      </Salary>
      <Name>
        {firstName} {lastName}
      </Name>
      <Department>
        {'Department: '}
        {department}
      </Department>
    </Wrapper>
  );
};
