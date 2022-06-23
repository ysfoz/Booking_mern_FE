import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import SelectRoom from "../selectRoom/SelectRoom";
import { LoadingSpinner } from "../spinner/spinner.style";
import { CloseIcon, Wrapper, Container, Title, Button } from "./reserve.style";

const Reserve = ({ setOpenModal, id }) => {
  const { loading, error, data } = useFetch(`/hotel/room/${id}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  console.log("🚀 ~ file: REserve.jsx ~ line 11 ~ Reserve ~ selectedRooms", selectedRooms)



  return (
    <Container>
      <Wrapper>
        <Title>Select your rooms:</Title>
        <CloseIcon icon={faCircleXmark} onClick={() => setOpenModal(false)} />

        {loading ? (
          <LoadingSpinner />
        ) : (
          data?.map((room) => (
            <SelectRoom
              key={room._id}
              room={room}
              selectedRooms={selectedRooms}
              setSelectedRooms={setSelectedRooms}
             
            />
          ))
        )}
        <Button>Reserve</Button>
      </Wrapper>
    </Container>
  );
};

export default Reserve;
