import React from "react";
import { Link } from "react-router-dom";
import { NavbarIcons, LinkDataDiv } from "../styled-components/NavbarStyled";

export default function NavbarLinks(props) {
  return (
    <>
    <LinkDataDiv>
      <NavbarIcons to={props.linkData.path}>
        {props.linkData.icon}{" "}{props.linkData.name}{" "}
      </NavbarIcons>

      </LinkDataDiv>
    </>
  );
}
