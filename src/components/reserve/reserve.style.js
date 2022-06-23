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
padding:50px 10px;
 width: 50%;
  height: 70%;
  display: flex;
  align-items: center;
 gap: 30px;
  background-color: #fff;
  position: relative;
  flex-direction: column;
 overflow-y: scroll;
`

const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 30px;
  color: #0071c2;
  cursor: pointer;
`;

const Title = styled.h4`
position: absolute;
top: 10px;
color: #0071c2;
left: 10px;

`

export { Container,CloseIcon,Wrapper,Title }