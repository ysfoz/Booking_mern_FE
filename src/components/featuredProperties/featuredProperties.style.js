import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  justify-content: space-between;
  gap: 20px;
`;

const Wrapper = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 14px;
`;
const City = styled.span`
  font-weight: 300;
  font-size: 12px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const RatingsContainer = styled.div`
  font-size: 14px;
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Rating = styled.button`
  background-color: #003580;
  padding: 2px 4px;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: crimson;
  }
  :active {
    background-color: aliceblue;
  }
`;

const Note = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

const Rewiew = styled.span`
  color: lightgray;
  font-weight: 400;
  font-size: 14px;
`;

export {
  Container,
  Wrapper,
  Image,
  Title,
  TitleContainer,
  City,
  Price,
  Rating,
  RatingsContainer,
  Rewiew,
  Note,
};
