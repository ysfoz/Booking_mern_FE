import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import { ListContainer, Title, Toasty, ToastyContainer } from "./home.style";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const {state } = useLocation()
  const [message,setMessage] = useState(state?.message || '')

  useEffect(() => {
    message && setTimeout(() => {
      setMessage("")
    }, 10000);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <ListContainer>
      {message && (
          <ToastyContainer>
            <Toasty>{message}</Toasty>
          </ToastyContainer>
        )}
        <Featured />
        <Title>Browse by property type</Title>
        <PropertyList />
        <Title>Homes guests love</Title>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </ListContainer>
    </>
  );
};

export default Home;
