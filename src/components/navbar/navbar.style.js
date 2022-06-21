import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-weight: 500;
`;
const Button = styled.button`
  margin-left: 20px;
  bottom: none;
  padding: 5px 10px;
  color: #003580;
  cursor: pointer;
  border: none;
`;
const ButtonContainer = styled.div``;

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`

export { Wrapper, Container, Logo, Button, ButtonContainer,StyledLink };
