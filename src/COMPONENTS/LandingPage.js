import React, { useContext } from "react";
import { context } from "../CONTEXT/Context";
import Navbar from "./Navbar";
import "../CSS/LandingPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const LandingPage = () => {
  let context1 = useContext(context); // context

  // setting for carousel

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const setting2 = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
  }

  return (
    <>
      <Navbar />

      <div className="landing-page">
        {/* carousel */}
        <div className="carousel-div">
          <Slider {...settings}>
            <div>
              <img
                src="https://www.chhappanbhog.com/wp-content/uploads/2022/04/Mobile5.jpg"
                alt="asf"
                className="carousel-img"
              />
            </div>
            <div>
              <img
                src="https://www.chhappanbhog.com/wp-content/uploads/2022/04/Mobile-Web.jpg"
                alt="sdf"
                className="carousel-img"
              />
            </div>

            <div>
              <img
                src="https://www.chhappanbhog.com/wp-content/uploads/2022/04/Mobile1.jpg"
                alt="sdf"
                className="carousel-img"
              />
            </div>

            <div>
              <img
                src="https://www.chhappanbhog.com/wp-content/uploads/2022/04/mobile7.jpg"
                alt="sdf"
                className="carousel-img"
              />
            </div>
          </Slider>
        </div>

        {/* carousel ends here */}

        <div className="middle-section">
          <div className="special-header">
            <h1>
              <img
                src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/head_border_top.png"
                alt="asd"
              />
            </h1>
            <h1>Chappan Bhog Special</h1>
            <h1>
              <img
                src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/head_border_top.png"
                alt="asd"
              />
            </h1>
          </div>

          <div className="category-section">
            <div className="container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczC2ez06gNSc_872-ODV-5b7mUxXCit-zeA&usqp=CAU"
                alt=""
              />
              <div class="centered">
                <h1>Wedding Sweets</h1>
              </div>
            </div>
            <div className="container">
              <img
                src="https://d1ralsognjng37.cloudfront.net/48b83534-d612-442c-8333-465e47ddb785.jpeg"
                alt="as"
              />
              <div class="centered">
                <h1>Premium Sweets</h1>
              </div>
            </div>
            <div className="container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9Acobkr5YPzZbNoXMunoJs0kzm7FqK6q1w&usqp=CAU"
                alt="as"
              />
              <div class="centered">
                <h1>Halwa</h1>
              </div>
            </div>
            <div className="container">
              <img
                src="https://images.indianexpress.com/2022/02/motichoor-laddoos.jpg"
                alt="as"
              />
              <div class="centered">
                <h1>Laddoo</h1>
              </div>
            </div>
          </div>

          {/* <========= COLLECTION SECCTION ===========> */}
          <div className="collection-section">
            <div className="collection-header">
              <h1 className="exp">Explore Our Collection</h1>
              <h1>
                <img
                  src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/border.png"
                  alt="sd"
                />
              </h1>
              <h1>
                Chhappan Bhog is a reputed name in premium quality sweets and
                namkeen & other delectable delicacies
              </h1>
            </div>
          </div>
        </div>

{/* <========== BEST SELLER SECTION ==============> */}
        <div className="bestseller-section">
          <div className="bestseller-header">
            <h1 className="exp2">Our Best Seller Products</h1>
            <h1>
              <img
                src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/border.png"
                alt="sd"
              />
            </h1>
          </div>
          <div className="best-seller-carousel-div">
             {/* carousel starts*/}
             <div className="carousel-div2">
          <Slider {...setting2}>
            <div>
              <img
                src="https://www.chhappanbhog.com/wp-content/uploads/2022/04/Mobile5.jpg"
                alt="asf"
                className="carousel-img"
              />
            </div>
            <div>
              <img
                src="https://www.chhappanbhog.com/wp-content/uploads/2022/04/Mobile-Web.jpg"
                alt="sdf"
                className="carousel-img"
              />
            </div>

            <div>
              <img
                src="https://www.chhappanbhog.com/wp-content/uploads/2022/04/Mobile1.jpg"
                alt="sdf"
                className="carousel-img"
              />
            </div>

            <div>
              <img
                src="https://www.chhappanbhog.com/wp-content/uploads/2022/04/mobile7.jpg"
                alt="sdf"
                className="carousel-img"
              />
            </div>
            <div>
              <img
                src="https://www.chhappanbhog.com/wp-content/uploads/2022/04/mobile7.jpg"
                alt="sdf"
                className="carousel-img"
              />
            </div>
          </Slider>
        </div>
             {/* carousel ends */}
          </div>
        </div>

  </div>

    </>
  );
};

export default LandingPage;
