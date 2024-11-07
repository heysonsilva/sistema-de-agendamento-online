import styled from "styled-components";
import FormsCadastro from "../src/components/FormsCadastro";
import FormsLogin from "./components/FormsLogin";


const MainStyled = styled.main`
  width: 100vw;
  height: 100vh;
  font-size: 30px;
  display: flex;
`;

function RegistrationPage() {
  return (
    <>
    <MainStyled>
      <FormsLogin/>
      <FormsCadastro />
    </MainStyled>
    </>
  );
}

export default RegistrationPage;