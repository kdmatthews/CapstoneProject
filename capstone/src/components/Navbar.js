import React from "react";
import { useHistory } from "react-router";
import { navbarData, navbarUser } from "./NavbarData";
import NavbarLinks from "./NavbarLinks";
import { Header, LogOutButton } from "../styled-components/NavbarStyled";
// import  from "../../public"
import { connect } from "react-redux";

function Navbar() {
  const history = useHistory();
  const checkLogIn = localStorage.getItem("jsonwebtoken");
  console.log(checkLogIn);

  function logOut() {
    localStorage.removeItem("jsonwebtoken");
    history.push("/");
    window.location.reload(false);
  }

  return (
    <Header className="header">
      {checkLogIn
        ? navbarUser?.map((linkData) => <NavbarLinks linkData={linkData} />)
        : navbarData?.map((linkData) => <NavbarLinks linkData={linkData} />)}

      {checkLogIn ? <LogOutButton onClick={(e) => logOut(e)}>Log Out</LogOutButton> : null}
    </Header>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};
export default connect(mapStateToProps)(Navbar);
