import { React, useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import { PrimaryButton } from "./PrimaryButton";

const FormsCadastroStyled = styled.form`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const TitleStyled = styled.h2`
  position: absolute;
  top: 25vh;
  font-size: 30px;
  font-weight: 600;
  color: #00bf63;
`;

function FormsCadastro() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrarUsuario(e) {
    e.preventDefault();

    const userDate = {
      Nome: nome,
      Telefone: telefone,
      Senha: senha,
    };

    console.log("Nome:", nome, "Telefone:", telefone, "Senha:", senha);
  }

  return (
    <FormsCadastroStyled onSubmit={cadastrarUsuario}>
      <TitleStyled> Crie Sua Conta </TitleStyled>
      <Input
        iconType="user"
        id="nome"
        tipo={"Text"}
        placeholder={"Nome:"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <Input
        iconType="phone"
        id="telefone"
        tipo={"Number"}
        placeholder={"Telefone:"}
        value={telefone}
        onChange={(e) => {
          setTelefone(e.target.value);
        }}
      />
      <Input
        iconType="key"
        id="senha"
        tipo={"Password"}
        placeholder={"Senha:"}
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
      />
      <PrimaryButton type="submit" text={"CADASTRE-SE"} />
    </FormsCadastroStyled>
  );
}

export default FormsCadastro;
