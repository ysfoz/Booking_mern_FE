import { useState } from "react";
import {
  ButtonContainer,
  Wrapper,
  City,
  DateBox,
  SearchButton,
} from "./searchBar.style";



import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./dateRange.css";
import OptionBox from "../optionBox/OptionBox";

const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options,setOptions] = useState({
    adult:1,
    children:0,
    rooms:1
  })

  return (
    <Wrapper>
      <ButtonContainer>
        <FontAwesomeIcon icon={faBed} />
        <City placeholder="Where want to go" />
      </ButtonContainer>
      <ButtonContainer>
      <FontAwesomeIcon icon={faCalendarDays} />
        <DateBox onClick={() => setOpenDate(!openDate)}>{`${format(
          date[0].startDate,
          "dd/MM/yyyy"
        )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</DateBox>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className={"dateRange"}
          />
        )}
      </ButtonContainer>
      <ButtonContainer>
      <FontAwesomeIcon icon={faPerson} />
        <DateBox onClick={()=> setOpenOption(p => !p)}> {`${options.adult} Adult ${options.children} Children ${options.rooms} Rooms`} </DateBox>
        {openOption && <OptionBox options = {options} setOptions={setOptions}/>}
      </ButtonContainer>
      <ButtonContainer>
        <SearchButton >Search</SearchButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default SearchBar;
