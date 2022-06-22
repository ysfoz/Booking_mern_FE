import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0071c2;
  width: 40%;
  height: 55%;
  gap: 30px;
  position: relative;
  border-radius: 10px;
`;

const InputContainer = styled.div`
  width: 70%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  font-size: 16px;
`;

const Title = styled.label`
  color: white;
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
`;

const Error = styled.p`
  color: crimson;
  position: absolute;
  bottom: 5px;
  left: 10px;
  word-wrap: break-word;
  width: 95%;
  padding: 4px;
`;

export { Container, Wrapper, Input, Title, InputContainer, Error };
