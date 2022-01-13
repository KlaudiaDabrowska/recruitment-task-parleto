import React from 'react';
import Navigation from './Navigation';
import { Wrapper } from 'assets/styles/Template.styles';

const Template = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default Template;
