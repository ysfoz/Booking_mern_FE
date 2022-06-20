import React from "react";
import {
  Container,
  Wrapper,
  Button,
  Logo,
  ButtonContainer,
} from "./navbar.style";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>Logo</Logo>
        <ButtonContainer>
          <Button>Register</Button>
          <Button>Login</Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
