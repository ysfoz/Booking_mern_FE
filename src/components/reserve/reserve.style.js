import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper= styled.div`
 width: 40%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`

const CloseIcon = styled(FontAwesomeIcon)`
  position: fixed;
  top: 80px;
  right: 25%;
  font-size: 40px;
  color: white;
  cursor: pointer;
`;

export { Container,CloseIcon,Wrapper }