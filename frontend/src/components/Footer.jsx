import React from "react";
import styled from "styled-components";
import { Phone,Instagram } from "lucide-react";

const FooterStyled = styled.footer`
  width: 100vw;
  height: 10vh;
  background-color: rgb(34, 34, 34);
  color: rgb(0, 191, 98);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextInFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor:pointer;
`;

function Footer(props) {
  return (
    <FooterStyled>
      <TextInFooterStyled>
        <Phone />
        <h4> {props.tel} </h4>
        <h4>|</h4>
        <Instagram/>
        <h4> {props.insta} </h4>
      </TextInFooterStyled>
    </FooterStyled>
  );
}

export default Footer;
