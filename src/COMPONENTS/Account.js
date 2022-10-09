import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../CSS/Account.css";
import { Button, TextField } from "@mui/material";
import { context } from "../CONTEXT/Context";

const Account = () => {
  let signupcontext = useContext(context);
  let navigate = useNavigate();

  // LOGIN FUNCTION :~

  const Login_fun = () =>{
    if( signupcontext.singupDetail.email === '' || signupcontext.singupDetail.password === ''){
            alert('pahle form to fill karo mere dost...')
    }
    else{
      console.log();
      if(signupcontext.singupDetail.email === signupcontext.loginDetails.email || signupcontext.singupDetail.password === signupcontext.loginDetails.password){
         alert('you loggedIn.....');
         signupcontext.setloggedin(false);
         navigate('/Product')
      }
      else
      {
      alert('password did not  matched.. please singup the form...')
      }
 
    }
  }

  return (
    <div>
      <Navbar />
      <div className="signup-div">
        <div className="signup-form">
          <TextField id="name" label="ENTER YOUR EMAIL" variant="standard" 
          onChange={(e)=>signupcontext.setsignupDetail({...signupcontext.singupDetail, name: e.target.value})}
          />

          <TextField id="name" label="WRITE YOUR PASSWORD" variant="standard" 
          onChange={(e)=>signupcontext.setsignupDetail({...signupcontext.singupDetail, password: e.target.value})}
          
          />
          <div className="btn-div">
            <Button
              variant="contained"
              sx={{ width: "300px", fontSize: "22px" }}
              onClick={Login_fun}
            >
              Login
            </Button>
          </div>
          <div style={{ textAlign: "center", marginTop: "17px" }}>
            <p>
              Need an Account ?? <Link to="/Login">SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
