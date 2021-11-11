import React from "react";
import { navbarData, navbarUser } from "./NavbarData";
import NavbarLinks from "./NavbarLinks";
import { Header } from "../styled-components/NavbarStyled";

import { connect } from "react-redux";

function Navbar(props) {
  return (
    <Header>
      {props.isLoggedIn
        ? navbarUser?.map((linkData) => <NavbarLinks linkData={linkData} />)
        : navbarData?.map((linkData) => <NavbarLinks linkData={linkData} />)}
    </Header>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};
export default connect(mapStateToProps)(Navbar);
