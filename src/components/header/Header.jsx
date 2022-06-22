import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../searchBar/SearchBar";
import {
  Wrapper,
  Container,
  ButtonContainer,
  ButtonBox,
  Button,
  Title,
  TitleContainer,
  Desc,
  AccountButton,
} from "./header.style";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ list }) => {

  const { user } = useContext(AuthContext)
  return (
    <Wrapper>
      <Container>
        <ButtonContainer>
          <ButtonBox>
            <FontAwesomeIcon icon={faBed} />
            <Button>Stays</Button>
          </ButtonBox>
          <ButtonBox>
            <FontAwesomeIcon icon={faPlane} />
            <Button>Flights</Button>
          </ButtonBox>
          <ButtonBox>
            <FontAwesomeIcon icon={faCar} />
            <Button>Car Rental</Button>
          </ButtonBox>
          <ButtonBox>
            <FontAwesomeIcon icon={faBed} />
            <Button>Atractions</Button>
          </ButtonBox>
          <ButtonBox>
            <FontAwesomeIcon icon={faTaxi} />
            <Button>Airport Taxi</Button>
          </ButtonBox>
        </ButtonContainer>
        {!list && (
          <>
            <TitleContainer>
              <Title>A Lifetime of discounts ? It's Genius.</Title>
              <Desc>
                Get rewarded for your travels -unlock instant savings of 10% or
                ore with a free booking account.
              </Desc>
            </TitleContainer>
            {!user && <AccountButton>Register/Sign in</AccountButton>}
            <SearchBar />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;
