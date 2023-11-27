import React from 'react'
import { LoginComponent, TermsConditions } from './LoginStyled'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <LoginComponent>
      <img src="./assets/logo.jpg" alt="" />

      <h2>Welcome to Pigmentos</h2>

      <p>
        Get all UI Store design resources from the largest and popular design
        market on the internet.{" "}
      </p>

      <Link to={"/"}>
        <div>
          <FaGoogle />
        </div>
        Continue with google
      </Link>

      <p>By creating an account, you agree to Pigmentos</p>
      <TermsConditions>
        <Link to={"/"}> Terms of Use, </Link>
        <Link to={"/"}> Privacy Policy </Link>
      </TermsConditions>
    </LoginComponent>
  );
}
