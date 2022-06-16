import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  max-width: 1024px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: #ffb300 solid 2px ;
  padding: 5px;
  position: absolute;
  bottom: -25px;


`;
const ButtonContainer = styled.div`
  color: lightgray;
  position: relative;
`;
const City = styled.input`
margin-left: 10px;
border: none;
padding: 4px;

`;
const DateBox = styled.span`
  color: black;
  color: lightgray;
  margin-left: 10px;
  cursor: pointer;
  
`;

const SearchButton = styled.button`
border:none;
background-color: #0071c2;
color: white;
padding: 7px;
border-radius: 2px;
`;

export {  Wrapper, ButtonContainer, SearchButton, DateBox, City };
