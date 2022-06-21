import React from "react";
import useFetch from "../../hooks/useFetch";
import { LoadingSpinner } from "../spinner/spinner.style";
import {
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
} from "./featuredProperties.style";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "/hotel?featured=true&limit=4&min=40&max=600"
  );
  

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          {data?.map((hotel, index) => {
            return (
              <Wrapper key={index}>
                <Image src={hotel?.photos[0] || "https://images.unsplash.com/photo-1554009975-d74653b879f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"} />
                <TitleContainer>
                  <Title>{hotel?.name}</Title>
                  <City>{hotel?.city}</City>
                </TitleContainer>
                <Price>Starting from {hotel?.cheapestPrice} zt</Price>
                <RatingsContainer>
                  {hotel?.rating && <Rating>{hotel.rating}</Rating>}
                  <Note>Wanderful</Note>
                  <Rewiew>345 rewiews</Rewiew>
                </RatingsContainer>
              </Wrapper>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default FeaturedProperties;
