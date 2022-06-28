import styled from "styled-components";

const ListContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h3`
width: 1024px;
`

const ToastyContainer = styled.div`
background-color: #64ffda;
width: fit-content;
padding: 5px;
`

const Toasty = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #607d8b;
  text-align:center;
`;

export { ListContainer,Title,Toasty,ToastyContainer };
