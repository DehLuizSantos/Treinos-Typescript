import React from "react";

import { HeaderAppBar, HeaderLogo } from "./styles";

import logo from "../../assets/logo.svg";

const Login: React.FC = () => {
  return (
    <HeaderAppBar>
      <HeaderLogo src={logo} />
    </HeaderAppBar>
  );
};

export default Login;
