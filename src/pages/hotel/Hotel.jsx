import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
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
} from "./hotelstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleModal = (index) => {
    setOpen(true)
    setSlideIndex(index)
  }

  const handleChange = (direction) =>{
    let slideNumber;
    if (direction ==="l") {
      slideNumber = slideIndex === 0 ? 5 : slideIndex - 1
    } else {
      slideNumber = slideIndex === 5 ? 0 : slideIndex + 1
    }
    setSlideIndex(slideNumber)
  }
  return (
    <>
      <Navbar />
      <Header list />

      <Container>
        <HeaderContainer>
          <Wrapper>
            <Title>Tower Street Apartments</Title>
            <AddressContainer>
              <FontAwesomeIcon icon={faLocationDot} />

              <Address>
                consectetur adipisicing elit. Fuga, consequuntur.
              </Address>
            </AddressContainer>
            <Info color="#0071c2">Lorem ipsum dolor sit amet consectetur,</Info>
            <Info color="green">
              Ex facere est possimus! Quia, recusandae tenetur. adipisicing
              elit.
            </Info>
          </Wrapper>
          <Button>Reserve or Book Now!</Button>
        </HeaderContainer>
        <ImageContainer>
          {open && (
            <SliderContainer>
              <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)} />
              <SliderWrapper>
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleChange("l")} />
                <Image
                  style={{ width: "90%", height: "100%" }}
                  src={photos[slideIndex].src}
                />
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleChange("r")} />
              </SliderWrapper>
            </SliderContainer>
          )}

          {photos.map((image,index) => (
            <Image src={image.src} onClick={()=>handleModal(index)}/>
          ))}
        </ImageContainer>
        <BottomContainer>
          <DetailsContainer>
            <Title>Stay in the heart of Krakow</Title>
            <Detail>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              maxime reiciendis dolore quibusdam, modi ipsum eius explicabo!
              Veniam ad minima sed. Doloremque, corporis! Beatae modi a in,
              magni ea facere qui voluptate assumenda aperiam! Et, perspiciatis
              iure! Maxime consequuntur sapiente, minus quos dignissimos et
              ipsam quidem. Veritatis libero magni eius. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Vero ut, accusantium adipisci
              ipsam debitis rerum suscipit dolor amet expedita, reiciendis
              tempore, maiores quisquam eos nobis modi? Voluptatum ducimus
              assumenda, fuga quidem consequuntur earum eaque repellendus dicta
              quam, alias consectetur quibusdam!
            </Detail>
          </DetailsContainer>
          <PriceContainer>
            <Title small>Perfect for a 9-nights stay!</Title>
            <Detail>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum magnam libero repudiandae maxime! Facere quibusdam sed
              vero necessitatibus excepturi corporis!
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
  );
};

export default Hotel;
