import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper } from "../style/styles";
import Logo from "../images/Logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
