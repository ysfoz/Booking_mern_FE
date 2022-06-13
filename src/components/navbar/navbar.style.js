import styled from "styled-components";




const Wrapper = styled.div`
height: 50px;
background-color: #003580;
display: flex;
justify-content: center;

`
const Container = styled.div`
width: 100%;
max-width: 1024px;
color: white;
display: flex;
align-items: center;
justify-content: space-between;

`
const Logo = styled.span`
font-weight: 500;

`
const Button = styled.button`
margin-left: 20px;
bottom: none;
padding: 5px 10px;
color:#003580;
cursor: pointer;
`
const ButtonContainer = styled.div`

`

export {Wrapper,Container,Logo,Button,ButtonContainer}


