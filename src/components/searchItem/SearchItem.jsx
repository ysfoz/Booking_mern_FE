import React from "react";
import {
  Container,
  InfoContainer,
  ImageContainer,
  PriceContainer,
  Image,
  Title,
  Info,
  Price,
  Punkt,
  Review,
  SubInfo,
  Button,
  ReviewContainer,AvailableContainer
} from "./searchItem.style";

const SearchItem = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
      </ImageContainer>
      <InfoContainer>
        <Title>Tower Street Apartments</Title>
        <Info>500m from center</Info>
        <Info filled>Free airport taxi</Info>
        <Info bold>Studio Apertment with Air conditioning</Info>
        <Info>Entire studio . 1 bathroom . 21m² 1 full bed</Info>
        <Info green bold>
          Free cancellation
        </Info>
        <Info green>You can cancel later, so lock in this price today!</Info>
      </InfoContainer>
      <PriceContainer>
        <ReviewContainer>

        <Review>
          Excellent
        </Review>
        <Punkt>
          8.9
        </Punkt>
        </ReviewContainer>
        <AvailableContainer>

        <Price>
          $112
        </Price>
        <SubInfo>
          Includes taxes and fees
        </SubInfo>

        <Button>
          See Availability
        </Button>
        </AvailableContainer>
      </PriceContainer>
    </Container>
  );
};

export default SearchItem;
