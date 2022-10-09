import React, { useState } from "react";
import Navbar from "./Navbar";
import "../CSS/Checkout.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [addressDetail,setAddressDetail] = useState({
    name:'',
    address:'',
    phoneno:'' 
  })
let navigate = useNavigate();

  console.log(addressDetail);
  const PlaceOrder = () =>{
    if(addressDetail.name === '' || addressDetail.phoneno === '' || addressDetail.address === ''){
      alert('please fill all the details...')
    }
    else{

      alert("Your order has been placed successfully...")
    }
  }
  return (
    <>
      <Navbar />
      <div className="checkout-page">
        <div className="checkout-form">
          <div>
            <h2 style={{textAlign:"center"}}>Your delivery Address</h2>
            <div className="signup-div">
              <div className="signup-form">
                <TextField
                  id="name"
                  label="ENTER YOUR NAME"
                  variant="standard"
                  type="text"
                  onChange={(e)=>setAddressDetail({...addressDetail, name: e.target.value})}
                />
                <br></br>
                <TextField
                  id="name"
                  label="ENTER YOUR PHONE NO"
                  variant="standard"
                  type="tel"
                  onChange={(e)=>setAddressDetail({...addressDetail,phoneno:e.target.value})}
                />
                <TextField
                  id="name"
                  label="ENTER YOUR ADDERESS"
                  variant="standard"
                  type="text"
                  onChange={(e)=>setAddressDetail({...addressDetail,address:e.target.value})}
                />
              
                <div className="btn-div">
                  <Button
                    variant="contained"
                    sx={{ width: "300px", fontSize: "20px" }}
                    onClick={PlaceOrder}
                  >
                    PLACE YOUR ORDER
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-product">
          <div style={{textAlign:"center",padding:"15px"}}>
            <h2>Your total items:5</h2>
            <h2>Your total Price:540</h2>
            <div style={{marginTop:"25px"}}>
            <button 
              id="continue"
              onClick={()=>navigate('/Product')}
            >Contiue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
