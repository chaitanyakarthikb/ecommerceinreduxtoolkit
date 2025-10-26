import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { FaDiscord, FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const FooterSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <section className="contactUsBox">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>Get Started</Button>
          </div>
        </section>

        <section className="grid gridfourcolumns">
          <div className="basva-store-details">
            <h3>Basva Store</h3>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              rem inventore voluptates nesciunt, magni provident in quo atque
              totam dolor quia excepturi quod, accusamus ullam ipsum nulla vero
              earum corporis?
            </span>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>

              <div>
                <FaFacebookF className="icons" />
              </div>

              <div>
                <IoLogoYoutube className="icons" />
              </div>
            </div>
          </div>

          <div className="footer-form">
            <h3>Subscribe to get important updates</h3>
            <input placeholder="your email" />
            <Button>Subscribe</Button>
          </div>

          <div className="d-column-center">
            <h3>Call us</h3>
            <span>+91 7569931792</span>
          </div>
        </section>

        <hr></hr>

        <div className="footerContent">
          <h3>${new Date().getFullYear()} Basva Store. All rights reserved.</h3>
          <div>
            <h3>Privacy Policy</h3>
            <h3>Terms and conditions</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.footer_bg};
  height: 65vh;
  margin-top: 10rem;

  .gridfourcolumns {
    grid-template-columns: 1fr 1fr 1fr auto;
  }


  .contactUsBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    background-color: ${({ theme }) => theme.colors.bg};
    margin-left: auto;
    margin-right: auto;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 8rem;
    margin-bottom: 25px;
    border-radius: 5px;
  }
  section div {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .basva-store-details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .basva-store-details span,
  .d-column-center span,
  .footer-form span {
    font-size: 1.3rem;
  }

  

  .d-column-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer-social--icons {
    display: flex;
    gap: 2rem;

    div {
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};

      .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }

  .footerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  height:120vh;
  .gridfourcolumns{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
  }

  .contactUsBox {
    width: 100%;
  }

  .footerContent{
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    padding-top: 15px;
    cursor: pointer;

  }

  .footer-form {
    display: flex;
    flex-direction: column;
    width:50%;
    justify-content: space-between;
  }
`;
export default FooterSection;
