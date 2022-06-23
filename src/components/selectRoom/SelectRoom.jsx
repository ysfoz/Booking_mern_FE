import {
  Check,
  Container,
  Title,
  Label,
  InputContainer,
  TitleContainer,
  Wrapper,
} from "./selectRoom.style";

const SelectRoom = () => {
  return (
    <Container>
      <TitleContainer >
        <Title weight="600">King Room</Title>
        <Title>King size bed, 1 bth, balcony</Title>
        <Title>2 Bedrooms</Title>
        <Title size="12px">
          Max People : <b>3</b>
        </Title>
        <Title weight="600">100</Title>
      </TitleContainer>
      <Wrapper>
        <InputContainer>
          <Label >101</Label>
          <Check type={"checkbox"} />
        </InputContainer>
        <InputContainer>
          <Label>102</Label>
          <Check type={"checkbox"} />
        </InputContainer>
      </Wrapper>
    </Container>
  );
};

export default SelectRoom;
