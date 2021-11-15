import React from "react";
import { useSelector } from "react-redux";
import { navbarData, navbarUser } from "./NavbarData";
import NavbarLinks from "./NavbarLinks";
import { Header } from "../styled-components/NavbarStyled";
// import  from "../../public"
import { connect } from "react-redux";

function Navbar() {
  const checkLogIn = localStorage.getItem("jsonwebtoken");
  console.log(checkLogIn);
  return (
    <Header>
      {checkLogIn
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
