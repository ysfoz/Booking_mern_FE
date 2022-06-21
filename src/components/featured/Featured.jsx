import React from "react";
import useFetch from "../../hooks/useFetch";
import {
  Container,
  Image,
  Title,
  SubTitel,
  TitleContainer,
  Wrapper,
} from "./featured.style";
import { LoadingSpinner } from "../spinner/spinner.style";

const Featured = () => {
const { data, loading, error} = useFetch("/hotel/countbycity?cities=berlin,kassel,paris,ankara,chicago")

  return (
    <>
    {loading ? <LoadingSpinner/> :

    
    <Container>
    <Wrapper>
    <Image src="https://images.unsplash.com/photo-1579032320705-b5777e7b91ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
    <TitleContainer>
    <Title>Berlin</Title>
    <SubTitel>{data[0]} Properties</SubTitel>
    </TitleContainer>
      </Wrapper>
      <Wrapper>
        <Image src="https://images.unsplash.com/photo-1579032320705-b5777e7b91ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
        <TitleContainer>
        <Title>Kassel</Title>
        <SubTitel>{data[1]} Properties</SubTitel>
        </TitleContainer>
        </Wrapper>
        <Wrapper>
        <Image src="https://images.unsplash.com/photo-1579032320705-b5777e7b91ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
        <TitleContainer>
          <Title>Chicago</Title>
          <SubTitel>{data[4]} Properties</SubTitel>
        </TitleContainer>
      </Wrapper>
      </Container>
  }
  </>
  );
};

export default Featured;
