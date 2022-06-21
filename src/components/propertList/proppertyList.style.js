import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  justify-content: space-between;
  gap: 20px;
`;

const Wrapper = styled.div`
  flex: 1;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const TitleContainer = styled.div``;

const Title = styled.h4`
text-transform:capitalize;

`;

const SubTitle = styled.h5`
  font-weight: 200;
`;

export { Container, Wrapper, Image, Title, TitleContainer, SubTitle };
