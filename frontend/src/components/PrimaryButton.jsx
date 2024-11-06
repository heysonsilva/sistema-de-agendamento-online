import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: rgb(50, 94, 0) 13;
  cursor:pointer;
  border: none;
  margin-top: 20px;
  color: black;
  padding: 20px 50px;
  margin: 20px;
`;

function PrimaryButton() {
  return (
    <>
      <ButtonStyled/>
    </>
  );
}

export default PrimaryButton;
