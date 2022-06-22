import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import {
  FooterContainer,
  Container,
  HeaderContainer,
  ImageContainer,
  BottomContainer,
  Title,
  Info,
  Address,
  Button,
  Wrapper,
  AddressContainer,
  Image,
  DetailsContainer,
  Detail,
  PriceContainer,
  Price,
  PriceDetail,
  PriceWrapper,
  SliderContainer,
  SliderWrapper,
  ArrowIcon,
  CloseIcon,
} from "./hotelstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import useFetch from "../../hooks/useFetch"
import { LoadingSpinner } from "../../components/spinner/spinner.style";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const location = useLocation()
  const id = location.pathname.split('/')[2]
  
  const { data, loading, error} = useFetch(`/hotel/find/${id}`)
  

  
  const handleModal = (index) => {
    setOpen(true);
    setSlideIndex(index);
  };

  const handleChange = (direction) => {
    let slideNumber;
    if (direction === "l") {
      slideNumber = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      slideNumber = slideIndex === 5 ? 0 : slideIndex + 1;
    }
    setSlideIndex(slideNumber);
  };
  return (
    <>
      <Navbar />
      <Header list />

      {loading 
      ?
      <LoadingSpinner style={{margin:"50% auto"}}/>
      :
<>
      <Container>
        <HeaderContainer>
          <Wrapper>
            <Title>{data.name}</Title>
            <AddressContainer>
              <FontAwesomeIcon icon={faLocationDot} />

              <Address>
                {data.address}
              </Address>
            </AddressContainer>
            <Info color="#0071c2">Lorem ipsum dolor sit amet consectetur,</Info>
            <Info color="green">
            Book a stay over $200 at this property and get a free airport taxi
            </Info>
          </Wrapper>
          <Button>Reserve or Book Now!</Button>
        </HeaderContainer>
        <ImageContainer>
          {open && (
            <SliderContainer>
              <CloseIcon icon={faCircleXmark} onClick={() => setOpen(false)} />
              <SliderWrapper>
                <ArrowIcon
                  icon={faCircleArrowLeft}
                  onClick={() => handleChange("l")}
                />
                <Image
                  style={{ width: "90%", height: "100%" }}
                  src={data.photos[slideIndex]}
                />
                <ArrowIcon
                  icon={faCircleArrowRight}
                  onClick={() => handleChange("r")}
                />
              </SliderWrapper>
            </SliderContainer>
          )}

          {data.photos?.map((image, index) => (
            <Image
              src={image}
              key={index}
              onClick={() => handleModal(index)}
            />
          ))}
        </ImageContainer>
        <BottomContainer>
          <DetailsContainer>
            <Title>{data.title}</Title>
            <Detail>
             {data.desc}
            </Detail>
          </DetailsContainer>
          <PriceContainer>
            <Title small>Perfect for a 9-nights stay!</Title>
            <Detail>
              {`Located in the real heart of ${data.city}, this propperty has an excellent location score of ${data.rating}`}
            </Detail>
            <PriceWrapper>
              <Price>$125</Price>
              <PriceDetail>( 9 nights )</PriceDetail>
            </PriceWrapper>
            <Button>Reserve or Book Now!</Button>
          </PriceContainer>
        </BottomContainer>
      </Container>

      <FooterContainer>
        <MailList />
        <Footer />
      </FooterContainer>
      </>
}
    </>
  );
};

export default Hotel;
