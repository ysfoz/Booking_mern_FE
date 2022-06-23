import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { CloseIcon, Wrapper } from "./reserve.style";
import { Container } from "./reserve.style";

const Reserve = ({setOpenModal}) => {
  return (
    <Container>
      <Wrapper>
        <CloseIcon icon={faCircleXmark} onClick={()=>setOpenModal(false)} />
      </Wrapper>
    </Container>
  );
};

export default Reserve;
