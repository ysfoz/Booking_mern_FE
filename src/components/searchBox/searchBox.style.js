import styled from "styled-components";


const Container = styled.div`
  background-color: #febb02;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  position: sticky;
  top: 10px;
  
`;

const Search = styled.h2`
  color: #555;
`;
const InputsContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.top ? "column" : "row")};
  justify-content: ${(props) => (!props.top ? "space-between" : "none")};
  gap: 10px;
`;
const Titel = styled.label`
  font-size: 12px;
  font-weight: 500;
  margin-left: ${(props) => (!props.top ? "15px" : "none")};
  margin-top: 4px;
`;

const DestinationandDate = styled.input`
  padding: 7px;
  width: 220px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Options = styled.span`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 500;
`;
const OptionsInput = styled.input`
  margin-left: 5px;
  width: 60px;
`;
const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  border: none;
  padding: 6px;
  color: white;
  background-color: #0071c2;
`;

export {
  Container,
  Search,
  InputsContainer,
  Titel,
  DestinationandDate,
  OptionsContainer,
  Options,
  OptionsInput,
  Button,
};
