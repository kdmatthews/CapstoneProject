import React from "react";
import { NavbarIcons } from "../styled-components/NavbarStyled";

export default function NavbarLinks(props) {
  return (
    <>
    <div>
      <NavbarIcons to={props.linkData.path}>
        {props.linkData.icon}{" "}{props.linkData.name}{" "}
      </NavbarIcons>

      </div>
    </>
  );
}
