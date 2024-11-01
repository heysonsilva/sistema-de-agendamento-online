import React from "react";
import styled from "styled-components";
import logotipo from "../assets/logotipo.jpg";

const StyledHeader = styled.header`
  width: 100vw;
  height: 20vh;
  padding: 20px;
  background-color: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px #222222;
`;

const StyledImage = styled.img`
  width: 140px;
  height: 130px;
  cursor: pointer;

  &:hover{
    width: 145px;
    height:135px;
  }
`;


const Header = () => {
  return (
    <StyledHeader>
      <StyledImage src={logotipo}/>
    </StyledHeader>
  );
};

export default Header;
