import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { Container, Wrapper } from "./list.style";
import SearchBox from "../../components/searchBox/SearchBox";
import SearchItem from "../../components/searchItem/SearchItem";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { LoadingSpinner } from "../../components/spinner/spinner.style";
import { useState } from "react";

const List = () => {
  let { state } = useLocation();
  

  const [filter, setFilter] = useState({ city: state?.destination });

  const { data, loading, error, reFetch } = useFetch(
    `/hotel?city=${filter?.city}&min=${filter?.min || 0}&max=${
      filter?.max || 999
    }`
  );

  const handleReFetch = (city, min, max) => {
    setFilter({ city, min, max });
  };

  return (
    <>
      <Navbar />
      <Header list />

      <Container>
        <SearchBox
          destination={state?.destination}
          options={state?.options}
          date={state?.date}
          handleReFetch={handleReFetch}
        />
        <Wrapper>
          {loading ? (
            <LoadingSpinner style={{position:"fixed", left:"calc(60%)",top:"calc(50%)"}}/>
          ) : (
            data.map((item, index) => {
              return <SearchItem key={index} item={item} />;
            })
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default List;
