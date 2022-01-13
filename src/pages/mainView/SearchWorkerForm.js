import React from 'react';
import { useFormik } from 'formik';
import { StyledForm, StyledLabel, StyledInput, Button, Salary, StyledInputSalary, StyledSalary } from 'assets/styles/SearchWorkerForm.styles';
import { departments } from 'config/data/Departments';

export const SearchWorkerForm = () => {
  const formik = useFormik({
    initialValues: {
      person: '',
      department: '',
      salary: '0',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledLabel htmlFor="person">Person</StyledLabel>
      <StyledInput id="person" name="person" type="text" onChange={formik.handleChange} value={formik.values.person} />
      <StyledLabel htmlFor="department">Department</StyledLabel>
      <StyledInput
        id="department"
        name="department"
        type="text"
        list="department_data"
        onChange={formik.handleChange}
        value={formik.values.department}
      />{' '}
      <datalist id="department_data">
        {departments.map((department) => (
          <option key={department} value={department} />
        ))}
      </datalist>
      <StyledLabel htmlFor="salary">Salary</StyledLabel>
      <StyledSalary>
        <StyledInputSalary id="salary" name="salary" type="number" onChange={formik.handleChange} value={formik.values.salary} />{' '}
        <StyledInputSalary id="salary" name="salary" type="number" onChange={formik.handleChange} value={formik.values.salary} />{' '}
      </StyledSalary>
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
};
