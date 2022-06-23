import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Error,
  ButtonWrapper,
  Button,
  StyledLink,
  Toasty,
  ToastyContainer
} from "./login.style";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loading, error, dispatch, message } = useContext(AuthContext);
  console.log("🚀 ~ file: Login.jsx ~ line 22 ~ Login ~ message", message);
  const navigate = useNavigate();

  const handleClick = async (values) => {
    dispatch({ type: "START" });
    try {
      const res = await axios.post("/auth/login", values);
      dispatch({ type: "LOGIN", payload: res?.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "FAILURE" });
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("username is required")
        .min(3, "Username is too short - should be 3 chars minimum."),
      password: Yup.string()
        .required("No password provided.")
        .min(5, "Password is too short - should be 6 chars minimum."),
    }),
    onSubmit: (values) => {
      handleClick(values);
    },
  });

useEffect(()=>{
setTimeout(()=> {
  dispatch({type:"RESET"})
},10000)
},[message])
    
 


  return (
    <Container>
      <Wrapper>
       {message && <ToastyContainer>
           <Toasty>{message}</Toasty>
        </ToastyContainer>}
        <Title>SIGN IN</Title>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            placeholder="username"
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <Error>{formik.errors.username}</Error>
          ) : null}
          <Input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Error>{formik.errors.password}</Error>
          ) : null}
          <ButtonWrapper>
            <Button type="submit" disabled={loading}>
              LOGIN
            </Button>
            <StyledLink to="/register">Create a new account</StyledLink>
          </ButtonWrapper>
          {error && <Error>Something went wrong !!!</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
