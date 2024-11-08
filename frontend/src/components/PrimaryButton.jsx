import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: rgb(0, 191, 98);
  cursor: pointer;
  border: none;
  border-radius: 30px;
  margin-top: 20px;
  color: #ffffff;
  padding: 5px 100px;
  font-size: 20px;
  position: relative;
  top: 3vh;
  transition: background-color;

  &:hover {
    background-color: rgb(1, 71, 38);
    transition: 0.5s;
  }
  &:not(:hover){
    transition: 1.0s;
  }
`;

function PrimaryButton(props) {

  return (
    <>
      <ButtonStyled type="submit" > {props.text} </ButtonStyled>
    </>
  );
}


export {ButtonStyled, PrimaryButton};
