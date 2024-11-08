import styled from "styled-components";
import { Phone, UserRound, KeyRound } from "lucide-react";

const InputStyled = styled.input`
  background-color: rgb(229, 229, 229);
  outline: 0;
  border: none;
  padding: 10px 150px;
  border-radius: 10px;
  font-size: 15px;
  margin: -12px;

  &:focus,
  &:valid {
    border: 2px solid #00bf63;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-ms-reveal {
    position: relative;
    left:100px;
  }
`;

const IconInputStyled = styled.span`
  position: relative;
  color: gray;
  right: 216px;
  top: 45px;
`;

const LabelStyled = styled.label`
  position: relative;
  right: 158px;
  top: 22px;
  color: gray;
  font-size: 17px;
`;

function Input({ iconType, placeholder, tipo, value, onChange  }) {
  // Função para selecionar o ícone com base no prop `iconType`
  const selectIcon = () => {
    switch (iconType) {
      case "phone":
        return <Phone />;
      case "user":
        return <UserRound />;
      case "key":
        return <KeyRound />;
      default:
        return null;
    }
  };

  return (
    <>
      <IconInputStyled>{selectIcon()}</IconInputStyled>
      <LabelStyled>{placeholder}</LabelStyled>
      <InputStyled required type={tipo}  value={value} onChange={onChange}/>
    </>
  );
}

export default Input;
