import React, { useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/footer";
import PrimaryButton from "./components/PrimaryButton";

const MainStyled = styled.main`
  width: 100vw;
  height: 70vh;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {


  return (
    <>
      <Header />
      <MainStyled>
        <PrimaryButton/>
      </MainStyled>
      <Footer tel={"(01) 987654321"} insta={"@insta_da_barbearia"} />
    </>
  );
}

export default App;
