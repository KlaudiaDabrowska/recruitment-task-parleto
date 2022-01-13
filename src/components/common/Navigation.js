import React from 'react';
import { Logo, StyledLink, Wrapper } from 'assets/styles/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Workers
          <br />
          Summary
        </h1>
      </Logo>
      <StyledLink exact to="/">
        Workers List
      </StyledLink>
      <StyledLink to="/add-workers">Add workers</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
