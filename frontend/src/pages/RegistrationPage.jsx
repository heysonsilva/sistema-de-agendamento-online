import styled from "styled-components";
import RedirectLogin from "../components/RedirectLogin";
import FormsCadastro from "../components/FormsCadastro"

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
      <RedirectLogin/>
      <FormsCadastro />
    </MainStyled>
    </>
  );
}

export default RegistrationPage;