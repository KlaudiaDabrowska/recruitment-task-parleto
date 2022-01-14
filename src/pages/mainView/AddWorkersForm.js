import React from 'react';
import { Title } from 'assets/styles/Header.styles';
import { ComponentWrapper } from 'assets/styles/Wrappers.styles';
import { useFormik } from 'formik';
import { SubmitButton } from 'assets/styles/Buttons.styles';
import { StyledForm, StyledLabel, StyledInput } from 'assets/styles/Form.styles';
import { departments } from 'config/data/departments';
import { currencies } from 'config/data/currencies';

export const AddWorkersForm = ({ setWorkers, workers }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      department: '',
      salary: '',
      currency: '',
    },
    onSubmit: (values) => {
      setWorkers([values, ...workers]);
      formik.resetForm();
    },
  });

  return (
    <ComponentWrapper>
      <Title> Add new worker </Title>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabel htmlFor="firstName">First Name</StyledLabel>
        <StyledInput id="firstName" name="firstName" type="text" onChange={formik.handleChange} value={formik.values.firstName} />
        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
        <StyledInput id="lastName" name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName} />
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
        <StyledInput id="salary" name="salary" type="number" onChange={formik.handleChange} value={formik.values.salary} />{' '}
        <StyledLabel htmlFor="currency">Currency</StyledLabel>
        <StyledInput
          id="currency"
          name="currency"
          type="text"
          list="currency_data"
          onChange={formik.handleChange}
          value={formik.values.currency}
        />{' '}
        <datalist id="currency_data">
          {currencies.map((currency) => (
            <option key={currency} value={currency} />
          ))}
        </datalist>
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </ComponentWrapper>
  );
};
