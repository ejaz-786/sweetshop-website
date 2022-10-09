import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Drawer, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { context } from "../CONTEXT/Context";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navcontext = useContext(context)
  let navigate = useNavigate();
  const headref = () => {
    navigate("/");
  };

  return (
    <>
      <div className="main">
        <div className="heading" onClick={headref}>
          <div className="header">
            <img
              src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/logo.png"
              alt="as"
              style={{ height: "12vh" }}
            />
          </div>
          <div>
            <span id="heading-txt">sweetshop</span>
          </div>
        </div>

        <div className="middle-nav-link">
          <ul>
            <li>
              <Link to="/Product" className="link">
                Our Products
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="link">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/About" className="link">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-link-div">
          <ul>
            <li>
              <Link to="/Cart" className="link">
                <Badge badgeContent={navcontext.cartArr.length} color="primary">
                 <ShoppingCartIcon sx={{ fontSize: "45px" }} />
                </Badge>
              </Link>
            </li>
            <li>
              <Link to="/Account" className="link">
                <Person2Icon sx={{ fontSize: "45px" }} />
              </Link>
            </li>
          </ul>

          <div className="hamburger">
            <IconButton className="icon-btn">
              <MenuIcon
                size="large"
                edge="start"
                sx={{ color: "gold", fontSize: "30px" }}
                aria-label="logo"
                onClick={() => setIsDrawerOpen(true)}
              />
            </IconButton>
          </div>
        </div>

        {/* drawer  */}
        <div className="drawer-div">
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => {
              setIsDrawerOpen(false);
            }}
          >
            <Box
              p={2}
              width="300px"
              sx={{ backgroundColor: "rgb(207, 142, 142)" }}
              textAlign="center"
              height="100vh"
              role="presentation"
            >
              <Typography
                component="div"
                sx={{ textAlign: "left", padding: "10px 5px" }}
              >
                <IconButton className="close-icon">
                  <CloseIcon
                    size="large"
                    edge="start"
                    sx={{ color: "rgb(253, 5, 54)", fontSize: "45px" }}
                    aria-label="logo"
                    onClick={() => setIsDrawerOpen(false)}
                  />
                </IconButton>
              </Typography>

              <Box component="div" sx={{ marginTop: "25px" }}>
                <div className="link-div">
                  <Link to="/Product" className="link">
                    Product
                  </Link>
                </div>
                <div className="link-div">
                  <Link to="/About" className="link">
                    About Us
                  </Link>
                </div>
                <div className="link-div">
                  <Link to="/Contact" className="link">
                    Contact Us
                  </Link>
                </div>
                <div className="link-div">
                  <Link to="/Cart" className="link">
                    Cart
                    <ShoppingCartIcon sx={{ fontSize: "45px" }} />
                  </Link>
                </div>
              </Box>
            </Box>
          </Drawer>
        </div>
        {/* drawer end */}
      </div>
    </>
  );
};

export default Navbar;
