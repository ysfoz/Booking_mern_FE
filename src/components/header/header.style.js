import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #003580;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 25px;
  margin: 15px 0px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  color: white;
  background-color: #003580;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

const Desc = styled.span`
  font-weight: 200;
  margin-top: 10px;
  font-style: 10px;
`;

const AccountButton = styled.button`
border:none;
cursor: pointer;
background-color:#0071c2 ;
display: flex;
color: white;
margin: 40px 0px;
padding: 6px;
width: 120px;
justify-content: center;
`

export {
  Wrapper,
  Container,
  ButtonContainer,
  ButtonBox,
  Button,
  Title,
  TitleContainer,
  Desc,
  AccountButton
};
