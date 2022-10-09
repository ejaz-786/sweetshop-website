import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import "../CSS/Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { context } from "../CONTEXT/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [count, setCount] = useState(0);
  let cartcontext = useContext(context);
  let navigate = useNavigate();

  // TOTAL PRICE CALCULATE:~
  let sum = 0;
  cartcontext.cartArr.map((val) => {
    sum += val.totalPrice;
  });


  // DELETE EACH ITEM:~
  const DeleteItem = (index) => {
    cartcontext.cartArr.splice(index, 1);
    setCount(count + 1);
  };


  // INCREASE PRICE ON CLICKING ON PLUS BUTTON
  const IncreamentItem = (obj) => {
    obj.Quantity++;
    obj.totalPrice = obj.Quantity * obj.price;
    setCount(count + 1);
    console.log(obj.totalPrice);
  };

  // DECREASE PRICE ON CLICKING ON MINUS BUTTON
  const DecreamentItem = (obj) => {
    let flag = true;
    if (obj.Quantity === 1) {
      flag = false;
    }
    if (flag) {
      obj.Quantity--;
      obj.totalPrice = obj.Quantity * obj.price;
      console.log(obj.totalPrice);
      setCount(count + 1);
    }
  };

  // CHECKOUT FUNTION:~
  const checkout_fun = () =>{
    if(cartcontext.loggedin){
      alert('please login first....');
      navigate('/Account')
    }
    else{
      navigate('/Checkout')
    }
  }

  return (
    <>
      <Navbar />
      <div className="cart-div">
        <div className="prod-details-section">
          <div className="cards">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Prduct image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Prduct Qunatity</th>
                  <th>Product Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartcontext.cartArr.map((val, index) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <img src={val.image} id="cart-img" alt="asf" />
                        </td>
                        <td>
                          <span>{val.name}</span>
                        </td>
                        <td>
                          <span>{val.price}.00 ₹ /-</span>
                        </td>
                        <td>
                          <span>
                            <button
                              className="incr"
                              onClick={() => IncreamentItem(val)}
                            >
                              +
                            </button>
                          </span>
                          <span className="qunat">{val.Quantity}</span>
                          <span>
                            <button
                              className="decr"
                              onClick={() => DecreamentItem(val)}
                            >
                              -
                            </button>
                          </span>
                        </td>
                        <td>
                          <span>{val.totalPrice}.00 ₹</span>
                        </td>
                        <td>
                          <DeleteIcon
                            sx={{ color: "red" }}
                            onClick={() => DeleteItem(index)}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="checkout-section">
          <div className="chekcout">
            <div>
              <h2>Total {cartcontext.cartArr.length} items</h2>
            </div>

            <div>
              <h2>Total price: {sum}.00 ₹ </h2>
            </div>

            <div>
              <button className="checkout-btn"
              onClick={checkout_fun}
              >Checkout</button>&emsp;
              <button className="checkout-btn"
                onClick={()=>cartcontext.setCartArr([])}
              >Empty Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
