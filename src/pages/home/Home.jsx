import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import { ListContainer, Title } from "./home.style";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ListContainer>
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
