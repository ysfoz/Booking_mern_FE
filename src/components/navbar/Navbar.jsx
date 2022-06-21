import React from "react";
import {
  Container,
  Wrapper,
  Button,
  Logo,
  ButtonContainer,
  StyledLink,
} from "./navbar.style";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <StyledLink to={'/'} >
        <Logo >Logo</Logo>
        </StyledLink>
        <ButtonContainer>
          <Button>Register</Button>
          <Button>Login</Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
