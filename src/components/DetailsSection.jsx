import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import styled from "styled-components";

const DetailsSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-three-column">
        <div className="details--item--one">
          <TbTruckDelivery className="icon" />
          <h3>Super Fast and Free Delivery</h3>
        </div>

        <div className="details--item--two">
          <div>
            <MdOutlineSecurity className="icon" />
            <h3>Non-Contact Shipping</h3>
          </div>
          <div>
            <GiReceiveMoney className="icon" />
            <h3>Money-back Guaranteed</h3>
          </div>
        </div>

        <div className="details--item--one">
          <RiSecurePaymentLine className="icon" />
          <h3>Super Secure Payment System</h3>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};

  .details--item--one {
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30rem;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
  .details--item--two {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30rem;
  }
  .details--item--two div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    height: 45%;
  }
`;

export default DetailsSection;
