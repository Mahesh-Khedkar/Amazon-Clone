import React from "react";
import "./Footer.css";
import { Link } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {

  let navigate = useNavigate();


  return (
    <div className="footerBody">
      <a href="#" >
          <div className="fContainer1"> 
            <span>Back to top</span>
          </div>
      </a>
      <div className="fContainer2">
        <div className="fCol">
          <div style={{ fontWeight: "bold" }}>
            Get to Know Us
          </div>
          <div>
            Careers
          </div>
          <div>
            Press Releases
          </div>
          <div>
            Amazon Science
          </div>
        </div>
        <div className="fCol">
          <div style={{ fontWeight: "bold" }}>
            Connect with Us
          </div>
          <div>
            Facebook 
          </div>
          <div>
            Twitter
          </div>
          <div>
            Instagram
          </div>
        </div>

        <div className="fCol">
          <div style={{ fontWeight: "bold" }}>
            Make money with Us
          </div>
          <div>
            Sell on Amazon
          </div>
          <div>
            Sell under Amazon Accelerator
          </div>
          <div>
            Protect and Build Your Brand
          </div>
          <div>
            Amazon Global Selling
          </div>
          <div>
            Become an Affiliate
          </div>
          <div>
            Fulfilment by Amazon
          </div>
        </div>
        <div className="fCol">
          <div style={{ fontWeight: "bold" }}>
            Let Us Help You
          </div>
          <div>
            COVID-19 and Amezon
          </div>
          <div>
            Your Account
          </div>
          <div>
            Returns Center
          </div>
          <div>
            100% Purchase Protection
          </div>
          <div>
            Amazon App Download
          </div>
          <div>
            Help
          </div>
        </div>
      </div>
      <hr/>
      <div className="fContainer3">
        <div className="footerLogo">
        </div>
        <div className="fContainer4">
          <div>
            <div>
              Australia
              Brazil
              Canada
              China
            </div>
            <div>
              France
              Germany
              Italy
              Japan
            </div>
            <div>
              Mexico
              Netherlands
              Poland
              Singapore
            </div>
            <div>
              Spain
              Turkey
              United Arab Emirates
            </div>
          </div>
          <br/>
          <div>
            United Kingdom
            United States
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
