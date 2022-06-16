import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { Container } from "./list.style"
import SearchBox from "../../components/searchBox/SearchBox"
import SearchItem from "../../components/searchItem/SearchItem"


const List = () => {
  return (
    <div >
      <Navbar/>
      <Header list/>

      <Container>
        <SearchBox/>
        <SearchItem/>

      </Container>
    </div>
  )
}

export default List