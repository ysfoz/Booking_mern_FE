import styled from "styled-components";

const FooterContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 1024px;
  margin: auto auto;
  margin-top: 50px;
  margin-bottom: 50px;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Title = styled.h3`
  font-size: ${(props) => props.small && "14px"};
`;
const AddressContainer = styled.span`
  font-size: 12px;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Address = styled.span`
  font-size: 12px;
`;
const Info = styled.span`
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 400;
`;
const Button = styled.button`
  background-color: #0071c2;
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px;
  height: fit-content;
  border-radius: 5px;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 5px;
`;

const Image = styled.img`
  width: 33%;
  object-fit: cover;
  height: 250px;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  gap: 10px;
`;
const Detail = styled.p`
  font-size: 12px;
`;

const PriceContainer = styled.div`
display: flex;
flex-direction: column;
  flex: 1;
  background-color: lightblue;
  padding: 10px;
  gap: 10px;
`;

const PriceWrapper = styled.div`

`
const Price = styled.span`
  font-weight: 700;
  margin-right: 10px;
 
`;
const PriceDetail = styled.span`
  font-weight: 300;
  
`;

export {
  FooterContainer,
  Container,
  Wrapper,
  HeaderContainer,
  ImageContainer,
  BottomContainer,
  Title,
  Address,
  Info,
  Button,
  AddressContainer,
  Image,
  DetailsContainer,
  Detail,
  PriceContainer,
  Price,
  PriceDetail,
  PriceWrapper
};
