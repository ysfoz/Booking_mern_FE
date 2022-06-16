import React from "react";
import {
  Container,
  Search,
  InputsContainer,
  Titel,
  DestinationandDate,
  OptionsContainer,
  Options,
  OptionsInput,
  Button,
} from "./searchBox.style";

const SearchBox = () => {
  return (
    <Container>
      <Search>Search</Search>
      <InputsContainer top>
        <Titel top>Destination</Titel>
        <DestinationandDate />
      </InputsContainer>
      <InputsContainer top>
        <Titel top>Check-in Date</Titel>
        <DestinationandDate />
      </InputsContainer>
      <OptionsContainer>
        <Options>Options</Options>
        <InputsContainer>
          <Titel>Min price per night</Titel>
          <OptionsInput type={"number"} />
        </InputsContainer>
        <InputsContainer>
          <Titel>Max price per night</Titel>
          <OptionsInput type={"number"} />
        </InputsContainer>
        <InputsContainer>
          <Titel>Adult</Titel>
          <OptionsInput type={"number"} min={1} />
        </InputsContainer>
        <InputsContainer>
          <Titel>Children</Titel>
          <OptionsInput type={"number"} min={0} />
        </InputsContainer>
        <InputsContainer>
          <Titel>Room</Titel>
          <OptionsInput type={"number"} min={1} />
        </InputsContainer>
      </OptionsContainer>

      <Button>Search</Button>
    </Container>
  );
};

export default SearchBox;
