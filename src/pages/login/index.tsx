import React from "react";

import { ContainerLogin, LoginCenter, ContainerButton } from "./styles";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button } from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

const Login: React.FC = () => {
  return (
    <ContainerLogin>
      <LoginCenter>
        <h2>Login</h2>
        <FormControl>
          <div>
            <InputLabel htmlFor="input-with-icon-adornment"> </InputLabel>
            <Input
              type="text"
              placeholder="Login"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </div>

          <div>
            <InputLabel htmlFor="input-with-icon-adornment"> </InputLabel>
            <Input
              type="text"
              placeholder="Password"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="end">
                  <LockIcon />
                </InputAdornment>
              }
            />
          </div>
        </FormControl>

        <ContainerButton>
          <Button variant="contained">Acessar conta</Button>
        </ContainerButton>
      </LoginCenter>
    </ContainerLogin>
  );
};

export default Login;
