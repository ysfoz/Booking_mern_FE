import { useState } from "react";
import {
  ButtonContainer,
  Wrapper,
  City,
  DateBox,
  SearchButton,
  StyledDateRange,
} from "./searchBar.style";

import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import OptionBox from "../optionBox/OptionBox";

import { useNavigate } from "react-router-dom";

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
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });
  

  const [destination, setDestination] = useState('')
  

  let navigate = useNavigate()

  return (
    <Wrapper>
      <ButtonContainer>
        <FontAwesomeIcon icon={faBed} />
        <City placeholder="Where want to go" title={destination} onChange={(e)=>setDestination(e?.target?.value)}/>
      </ButtonContainer>
      <ButtonContainer>
        <FontAwesomeIcon icon={faCalendarDays} />
        <DateBox
          onClick={() => {
            setOpenDate((prev) => !prev);
            setOpenOption(false);
          }}
        >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}</DateBox>
        {openDate && (
          <StyledDateRange
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
        <DateBox
          onClick={() => {
            setOpenOption((p) => !p);
            setOpenDate(false);
          }}
        >
          {" "}
          {`${options.adult} Adult ${options.children} Children ${options.rooms} Rooms`}{" "}
        </DateBox>
        {openOption && <OptionBox options={options} setOptions={setOptions} />}
      </ButtonContainer>
      <ButtonContainer>
        <SearchButton onClick={()=>navigate('/list',{state:{date,destination,options}})}>Search</SearchButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default SearchBar;
