import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1px;
`;

const Wrapper = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TitleContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
`;

const Title = styled.h1``;

const SubTitel = styled.h2``;

export { Container, Title, Image, SubTitel, TitleContainer, Wrapper };
