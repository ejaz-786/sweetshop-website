
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
        <div className="Footer-section">
          <div className="Footer">
            <div>
              <div>
                <h1>About Us</h1>
                <h1><img src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/ft-brd.png" alt="asdf"/></h1>
              </div>
              <div>
                <p>About Us</p>
                <p>Pan Home Delivery</p>
                <p>Gifting</p>
                <p>Wedding</p>
                <p>Contact</p>
              </div>
             
            </div>
            <div>
            <div>
                <h1>SPECIAL</h1>
                <h1><img src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/ft-brd.png" alt="asdf"/></h1>
              </div>
              <div>
                <p>Bites & Berries</p>
                <p>Salty Snacks</p>
                <p>Dry-Fruit</p>
                <p>Sweets & Savouies</p>
                <p>Sncaks</p>
                <p>Indian Delicacies</p>
              </div>
            </div>
            <div>
            <div>
                <h1>OTHERS</h1>
                <h1><img src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/ft-brd.png" alt="asdf"/></h1>
              </div>
              <div>
                <p>My Account</p>
                <p>Order Online</p>
                <p>Shipping</p>
                <p>Privacy Policy</p>
                <p>Terms And Conditions</p>
              </div>
            </div>
            <div>
            <div>
                <h1>CONTACT US</h1>
                <h1><img src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/ft-brd.png" alt="asdf"/></h1>
              </div>
              <div>
                <p>+(91)-9415115656</p>
                <p>info@chhappanbhog.com</p>
                <p>Apna Bazaar Sadar Lucknow,</p>
                <p>Uttar Pradesh(226 002),India</p>
                <p>
                  <span><FacebookIcon/></span>
                  <span><InstagramIcon/></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
  {/* <===========FOOTER SECTION ENDS HERE==========> */}
      <div className="last-footer">
          <div className="privacy">
             <span>Copyrights2021 | </span>
             <span>All right Reserved | </span>
             <span>Privacy Policy | </span>
             <span>Terms Of Use | </span>
          </div>
      </div>
    </>
  )
}

export default Footer
