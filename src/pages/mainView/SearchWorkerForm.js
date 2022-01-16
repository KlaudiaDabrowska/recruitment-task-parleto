import React from 'react';
import { useFormik } from 'formik';
import { departments } from 'config/data/departments';
import { Title } from 'assets/styles/Header.styles';
import { FormButton } from 'assets/styles/Buttons.styles';
import { FormButtonsWrapper } from 'assets/styles/Wrappers.styles';
import { StyledForm, StyledLabel, StyledInput, StyledInputSalary, StyledSalary } from 'assets/styles/Form.styles';

export const SearchWorkerForm = ({ applyFilters }) => {
  const formik = useFormik({
    initialValues: {
      person: '',
      department: '',
      minSalary: '',
      maxSalary: '',
    },
    onSubmit: (values) => {
      applyFilters(values);
      formik.resetForm();
    },
  });
  return (
    <>
      <Title>Search worker</Title>
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
        />
        <datalist id="department_data">
          {departments.map((department) => (
            <option key={department} value={department} />
          ))}
        </datalist>
        <StyledLabel htmlFor="salary">Salary</StyledLabel>
        <StyledSalary>
          <StyledInputSalary
            id="minSalary"
            name="minSalary"
            type="number"
            placeholder="Min. salary"
            onChange={formik.handleChange}
            value={formik.values.minSalary}
          />{' '}
          <StyledInputSalary
            id="maxSalary"
            name="maxSalary"
            type="number"
            placeholder="Max. salary"
            onChange={formik.handleChange}
            value={formik.values.maxSalary}
          />{' '}
        </StyledSalary>
        <FormButtonsWrapper margin-left="20px">
          <FormButton type="submit">Search</FormButton>
          <FormButton type="button" onClick={() => applyFilters(formik.initialValues)}>
            Reset list
          </FormButton>
        </FormButtonsWrapper>
      </StyledForm>
    </>
  );
};
