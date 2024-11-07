import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: rgba(0, 191, 99, 0);
  cursor: pointer;
  border: 2px solid #00bf63;
  border-radius: 30px;
  margin-top: 20px;
  color: #ffffff;
  padding: 5px 100px;
  margin: 20px;
  font-size: 15px;
  font-weight: 500;
  position:relative;
  top:55px;
  transition: background-color;

  &:hover {
    background-color: #464646;
    transition: 0.5s;
  }
  &:not(:hover) {
    transition: 1.0s;
  }
`;

function SecondaryButton() {
  return (
    <>
      <ButtonStyled> ENTRAR </ButtonStyled>
    </>
  );
}

export default SecondaryButton;
