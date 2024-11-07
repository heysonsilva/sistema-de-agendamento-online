import React from "react";
import styled from "styled-components";
import Input from "./Input"
import PrimaryButton from "./PrimaryButton";


const FormsCadastroStyled = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const TitleStyled = styled.h2`
  position:absolute;
  top:25vh;
  font-size:30px;
  font-weight: 600;
  color: #00bf63;
`

function FormsCadastro () {
  return (
    <FormsCadastroStyled>
      <TitleStyled> Crie Sua Conta </TitleStyled>
      <Input iconType="user" id="nome" tipo={'Text'} placeholder={"Nome:"} />
      <Input iconType="phone" id="nome" tipo={'Number'} placeholder={"Telefone:"} />
      <Input iconType="key" id="nome" tipo={'Password'} placeholder={"Senha:"} />
      <PrimaryButton text={"CADASTRE-SE"} />
    </FormsCadastroStyled>
  ) 
};

export default FormsCadastro;