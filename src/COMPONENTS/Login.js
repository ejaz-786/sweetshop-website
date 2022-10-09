import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { context } from "../CONTEXT/Context";
import Navbar from "./Navbar";

const Login = () => {
let logincontext = useContext(context);
let navigate = useNavigate();

// SIGNUP FORM :~

const  SignUp_fun = () =>{
  if( logincontext.loginDetails.name === '' || logincontext.loginDetails.password === '' || logincontext.loginDetails.email === '' || logincontext.loginDetails.adderess === ''){
    alert('please fill all the details')
}
else{
  alert('NOW YOU CAN LOG IN ....')
  navigate('/Account');

}
}
  return (
    <div>
      <Navbar />
      <Link to="/Product">continue shopping </Link>
      <div className="signup-div">
        <div className="signup-form">
          <TextField id="name" label="ENTER YOUR NAME" variant="standard" type='text'
           onChange={(e)=>logincontext.setloginDetails({...logincontext.loginDetails, name: e.target.value})}
          />
          <br></br>
          <TextField id="name" label="ENTER YOUR EMAIL" variant="standard" type="email"
           onChange={(e)=>logincontext.setloginDetails({...logincontext.loginDetails, email: e.target.value})}
          />
          <TextField id="name" label="ENTER YOUR ADDERESS" variant="standard" type="text"
           onChange={(e)=>logincontext.setloginDetails({...logincontext.loginDetails, adderess: e.target.value})}
          
          />
          <TextField
            id="name"
            label="CREATE YOUR PASSWORD"
            variant="standard"
            type="password"
           onChange={(e)=>logincontext.setloginDetails({...logincontext.loginDetails, password: e.target.value})}

          />
          <div className="btn-div">
            <Button variant="contained" sx={{ width: "300px",fontSize:"20px" }}
            onClick={SignUp_fun}
            >
              Create Your Account
            </Button>
          </div>
          <div style={{textAlign:"center",marginTop:"17px"}}>
            <p>Already a USER ?? <Link to='/Account'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
