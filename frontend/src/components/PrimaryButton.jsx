import styled from "styled-components";
import { useState } from "react";

const ButtonStyled = styled.button`
  background-color: rgb(50, 94, 0) 13;
  cursor:pointer;
  border: none;
  margin-top: 20px;
  color: black;
  padding: 20px 50px;
`;

function PrimaryButton() {
  const [contador, aumentarContador] = useState(0);
  if (contador == 15) {
    alert("LHE FALTA UMA CARTEIRA ASSINADA, IRMÃO 😑")
  }

  return (
    <>
      <ButtonStyled onClick={() => {aumentarContador(contador + 1);}}>
        {contador==0 ? "CLICA AQUI 🤠" : contador}
      </ButtonStyled>
    </>
  );
}

export default PrimaryButton;
