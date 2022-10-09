import React, { createContext, useState } from 'react'
import Products from '../DATA/Products';
export const context = createContext();
const Context = (props) => {
const [data,setData] = useState(Products);
const [cartArr,setCartArr] = useState([]);
const [loginDetails,setloginDetails] = useState({
  name:'',
  email:'',
  adderess:'',
  password:''

});
const [singupDetail,setsignupDetail] = useState({
  name:'',
  password:''
});
const [loggedin,setloggedin] = useState(true)
  return (
    <>
      <context.Provider
      value={{
        data,setData,
        cartArr,setCartArr,
        singupDetail,setsignupDetail,
        loginDetails,setloginDetails,
        loggedin,setloggedin
      }}
      >
        {props.children}
      </context.Provider>
    </>
  )
}

export default Context
