import styled from "styled-components";
import logotipo from "../assets/logotipo.jpg"
import SecondaryButton from "./SecondaryButton";

const FormsLoginStyled = styled.div`
  width: 30vw;
  height: 100vh;
  background-color: #222222 ;
  display: flex;
  color:white;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const StyledImage = styled.img`
  width: 160px;
  height: 150px;
  cursor: pointer;
  position: absolute;
  top:20vh;
  transition: transform;

  &:hover{
    transform: scale(1.1,1.1);
    transition: 0.5s;
  }
  &:not(:hover){
    transition: 0.5s;
  }
`;

const TitleTextStyled = styled.h1`
 font-size: 32px;
 font-weight: 500;
 position:relative;
 top: 35px;
`

const ParagrafoStyled = styled.p`
font-style: normal;
font-weight: 200;
font-size:15px;
position:relative;
top: 35px;
`

function FormsLogin () {
    return (
        <FormsLoginStyled>
            <StyledImage src={logotipo}/>
            <TitleTextStyled> Bem Vindo de Volta!</TitleTextStyled>
            <ParagrafoStyled> Acesse sua conta agora mesmo</ParagrafoStyled>
            <SecondaryButton/> 
        </FormsLoginStyled>
    )
}

export default FormsLogin;