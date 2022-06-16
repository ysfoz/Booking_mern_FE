import styled from "styled-components";

const Container = styled.div`
display: flex;
width: 100%;
max-width: 1024px;
justify-content: space-between;
margin-bottom: 50px;

`
const Wrapper = styled.div`

`
const List = styled.ul`
list-style: none;
padding: 0;
color:lightblue
`
const ListItem = styled.li`
margin-bottom: 10px;
cursor: pointer;
`

export { Container,Wrapper,List,ListItem}