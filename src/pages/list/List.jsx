import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { Container, Wrapper } from "./list.style";
import SearchBox from "../../components/searchBox/SearchBox";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  return (
    <>
      <Navbar />
      <Header list />

      <Container>
        <SearchBox />
        <Wrapper>

        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        </Wrapper>
      </Container>
    </>
  );
};

export default List;
