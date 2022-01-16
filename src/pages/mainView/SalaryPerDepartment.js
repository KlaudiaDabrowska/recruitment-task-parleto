import React from 'react';
import { Title } from 'assets/styles/Header.styles';
import { DepartmentSalary, DepartmentWrapper } from 'assets/styles/DepartmentSalary.styles';

export const SalaryPerDepartment = (salaryPerDepartment) => {
  return (
    <>
      <Title>Salary per Department</Title>
      <DepartmentWrapper>
        Administration
        <DepartmentSalary>{salaryPerDepartment.salaryPerDepartment.Administration}</DepartmentSalary>
      </DepartmentWrapper>
      <DepartmentWrapper>
        IT
        <DepartmentSalary>{salaryPerDepartment.salaryPerDepartment.IT}</DepartmentSalary>
      </DepartmentWrapper>
      <DepartmentWrapper>
        Sales
        <DepartmentSalary>{salaryPerDepartment.salaryPerDepartment.Sales}</DepartmentSalary>
      </DepartmentWrapper>
    </>
  );
};
