import styled from "styled-components";


export const Button =styled.button`

padding: 10px 18px;
color: white;
width: 220px;
height: 44px;

background: #000000;
border-radius: 5px;
border: transparent;
font-size: 16px;
transition: 0.2s background ease-in;
cursor: pointer;
&:hover{
    background-color: white;
    color: #000000;
    border: 1px solid black;
    transition: 0.2s background ease-out;
}


`

export const OutlineButton =styled(Button)`
color: #000000;
border: 1px solid black;
background: white;
&:hover{
    background-color: black;
    color: white;
    border: 1px solid black;
 
}
`