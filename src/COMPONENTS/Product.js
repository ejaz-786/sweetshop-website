import React, { useContext, useRef,useState } from "react";
import Navbar from "./Navbar";
import "../CSS/Product.css";
import { context } from "../CONTEXT/Context";
import { Rating } from "@mui/material";
import Products from "../DATA/Products";

const Product = () => {
  let context2 = useContext(context);
  let cardref = useRef(null);

  // <=========== FITER BY CATEGORY  ================>
  const FilterbyCategory = (categ) => {
    const filter_data = Products.filter((val) => val.category.includes(categ));
    context2.setData(filter_data);
  };

  // <=========== FITER BY PRICE  ================>

  const highToLow = () => {
    let temp = context2.data;
    temp.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      } else {
        return 1;
      }
    });
    context2.setData([...temp]);
  };
  const lowToHigh = () => {
    let temp = context2.data;
    temp.sort((a, b) => {
      if (a.price < b.price) {
        return -1; // not swaped
      } else {
        return 1; // swaped
      }
    });

    context2.setData([...temp]);
  };

  // <=========== SEARCH FUNCTIONALITY  ================>

  const search = (event) => {
    let value = event.target.value.toLowerCase().trim();
    let searched_data = Products.filter((val) =>
      val.name.toLowerCase().startsWith(value)
    );
    if (searched_data.length <= 0) {
      cardref.current.innerHTML = `  
      
      <h1 className="not-found">${"Data Not Found..."}</h1>
      <img
        src=${"https://icons.iconarchive.com/icons/icons-land/vista-style-emoticons/256/Cry-icon.png"}
        alt="adsad"
      />`
      ;
    } 
    else {
      context2.setData([...searched_data]);
      cardref.current.innerHTML = "";
    }
  }

  // <========== ADD TO CART FUNTIONALITY ============>
   const AddToCart = (id,obj) =>{
        let flag = true;
           context2.cartArr.forEach((val)=>{
             if(val.id  === id ){
                val.Quantity++ ;
                val.totalPrice = val.Quantity * val.price;
               flag = false;
             }
           })
          if(flag){
            context2.setCartArr([...context2.cartArr,obj]);
          }
        
        console.log(context2.cartArr);
    }

  return (
    <>
      <Navbar />
      <div className="main-product-div">
        <div className="product-header">
          <h1>
            <img
              src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/head_border_top.png"
              alt="asd"
            />
          </h1>
          <h1> Our Products </h1>
          <h1>
            <img
              src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/head_border_top.png"
              alt="asd"
            />
          </h1>
        </div>
        {/* 
          <div className="location">
           <p>HOME/PRODCUTS</p>
         </div> */}

        <div className="product-div">
          <div className="filter-div">
            <h2 style={{marginLeft:"18px"}}>Filter by Category:~</h2>

            <div className="categ-div">
              <div onClick={() => context2.setData(Products)}>
                <button>All</button>
              </div>
              <div onClick={() => FilterbyCategory("laddoo")}>
                <button>Laddo</button>
              </div>
              <div onClick={() => FilterbyCategory("halwa")}>
                <button>Halwa</button>
              </div>
              <div onClick={() => FilterbyCategory("gulab")}>
                <button>Gulabjamun</button>
              </div>
            </div>

            <h2 style={{marginLeft:"18px"}}>Sort By Price:~</h2>
            <div className="sort-by-price-div">
              <div>
                <button onClick={highToLow}>High to Low</button>
              </div>
              <div>
                <button onClick={lowToHigh}>Low to High</button>
              </div>
            </div>
          </div>

          <div className="product-section">
            <div className="inp-div">
              <input
                id="search-inp"
                placeholder="FIND YOUR TASTE ??"
                onChange={search}
              />
            </div>

            <div className="card-div">
              {context2.data.map((val, index) => {
                return (
                  <>
                    <div id="card-1" key={index}>
                      <div className="card-img">
                        <img
                          src={val.image}
                          alt="as"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="prod-name">
                        <h1>{val.name}</h1>
                      </div>
                      <div className="card-detail">
                        <div>
                          <span id="off-price">Price:{val.price}.00 ₹ </span>

                          <span id="price">
                            <s>220.00₹</s>
                          </span>
                        </div>
                        <div>
                          <Rating
                            name="read-only"
                            value={val.rating}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="add-to-cart-div">
                        <button className="add-cart-btn"
                        onClick={()=>{AddToCart(val.id,val)}}
                        >Add To Cart</button>
                      </div>
                    </div>
                  </>
                );
              })}
              {/* <div ref={cardref}></div> */}
              {/* 
              <div ref={cardref}>
           
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
