import React, { useContext } from "react";
import {
  Container,
  Input,
  Wrapper,
  Title,
  InputContainer,
  Error,
} from "./login.style";

import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { error, loading } = useContext(AuthContext);
  return (
    <Container>
      <Wrapper>
        <InputContainer>
          <Title htmlFor="username">Username</Title>
          <Input id="username" />
        </InputContainer>
        <InputContainer>
          <Title htmlFor="password">Password</Title>
          <Input type={"password"} id="password" />
        </InputContainer>
        {error && <Error>error</Error>}
      </Wrapper>
    </Container>
  );
};

export default Login;
