import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import SelectRoom from "../selectRoom/SelectRoom";
import { CloseIcon, Wrapper,Container,Title } from "./reserve.style";


const Reserve = ({setOpenModal,id}) => {
  const { loading, error, data } =useFetch(`/hotel/room/${id}`)
  console.log("🚀 ~ file: REserve.jsx ~ line 8 ~ Reserve ~ data", data)

  
  return (
    <Container>
      <Wrapper>
        <CloseIcon icon={faCircleXmark} onClick={()=>setOpenModal(false)} />
        <Title>Select your rooms:</Title>
        <SelectRoom/>
        <SelectRoom/>
        <SelectRoom/>
        <SelectRoom/>
        <SelectRoom/>
        <SelectRoom/>
        
     
      </Wrapper>
    </Container>
  );
};

export default Reserve;
