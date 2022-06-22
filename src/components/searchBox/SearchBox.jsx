import React, { useState } from "react";
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
import { format } from "date-fns";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchBox = () => {
  const { city, date, options, dispatch } = useContext(SearchContext);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [newCity, setNewCity] = useState(city);

  const handleReSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { city: newCity, min, max, date, options },
    });
  };

  return (
    <Container>
      <Search>Search</Search>
      <InputsContainer top>
        <Titel top>Destination</Titel>
        <DestinationandDate
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
      </InputsContainer>
      <InputsContainer top>
        <Titel top>Check-in Date</Titel>
        <DestinationandDate
          value={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        />
      </InputsContainer>
      <OptionsContainer>
        <Options>Options</Options>
        <InputsContainer>
          <Titel>Min price per night</Titel>
          <OptionsInput
            type={"number"}
            min={1}
            onChange={(e) => setMin(e?.target?.value)}
          />
        </InputsContainer>
        <InputsContainer>
          <Titel>Max price per night</Titel>
          <OptionsInput
            type={"number"}
            min={1}
            onChange={(e) => setMax(e?.target?.value)}
          />
        </InputsContainer>
        <InputsContainer>
          <Titel>Adult</Titel>
          <OptionsInput type={"number"} min={1} value={options?.adult} />
        </InputsContainer>
        <InputsContainer>
          <Titel>Children</Titel>
          <OptionsInput type={"number"} min={0} value={options?.children} />
        </InputsContainer>
        <InputsContainer>
          <Titel>Room</Titel>
          <OptionsInput type={"number"} min={1} value={options?.rooms} />
        </InputsContainer>
      </OptionsContainer>

      <Button onClick={handleReSearch}>Search</Button>
    </Container>
  );
};

export default SearchBox;
