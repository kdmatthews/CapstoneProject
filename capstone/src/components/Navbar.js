import React from "react";
import { useHistory } from "react-router";
import { navbarData, navbarUser } from "./NavbarData";
import NavbarLinks from "./NavbarLinks";
import { Header } from "../styled-components/NavbarStyled";

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
    <Header>
      {checkLogIn
        ? navbarUser?.map((linkData) => <NavbarLinks linkData={linkData} />)
        : navbarData?.map((linkData) => <NavbarLinks linkData={linkData} />)}

      {checkLogIn ? <button onClick={(e) => logOut(e)}>Log Out</button> : null}
    </Header>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};
export default connect(mapStateToProps)(Navbar);
