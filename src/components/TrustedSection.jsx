import React from "react";
import styled from "styled-components";

const TrustedSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3 id="heading">Trusted by 1000+ Companies</h3>
        <div className="brands">
          <img className="icon" src="/images/adidas.png" alt="" />
          <img className="icon" src="/images/aveda.png" alt="" />
          <img className="icon" src="/images/Ea.png" alt="" />
          <img className="icon" src="/images/puma.png" alt="" />
          <img className="icon" src="/images/sony.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};

  // padding-top: 1rem;
  padding-bottom: 5rem;
  text-align: center;
  .brands {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #heading {
    padding-top: 10rem;
    padding-bottom: 2rem;
  }
  .icon {
    width: 12rem;
    height: 12rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    margin-top: 10px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brands {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export default TrustedSection;
