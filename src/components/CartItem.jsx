import React from "react";
import FormatPrice from "./FormatPrice";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import { removeFromCart, toggleQuantity } from "../Features/CartsSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const Wrapper = styled.section`
    .dFlex {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .quantity {
      display: flex;
      justify-content: space-around !important;
      align-items: center;
    }
    .cartImg {
      min-width: 150px;
      max-width: 150px;
      img {
        width: 75%;
      }
    }
    .trash {
      color: red;
      cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .hideOnMobile {
        display: none;
      }
      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 9rem;

        .cartImg {
          width: 100px;
        }

        .cartImg img {
          width: 50%;
        }
      }
    }
  `;
  const dispatch = useDispatch();
  let cartItem = props.item;
  let price = cartItem?.price * (1 - cartItem?.discountPercentage / 100);
  const handleRemoveFromCart = (cartItem) => {
    let { id } = cartItem;
    dispatch(removeFromCart(id));
  };
  return (
    <Wrapper>
      <div className="container grid grid-five-column">
        {cartItem ? (
          <>
            <div className="cartImg">
              <img src={cartItem.images[0]} alt="" />
            </div>
            <p className="dFlex hideOnMobile">
              <FormatPrice price={price} />
            </p>
            <div className="dFlex quantity">
              <p
                onClick={() =>
                  dispatch(toggleQuantity({ sign: "-", id: cartItem.id }))
                }
              >
                -
              </p>
              <p>{cartItem.quantity}</p>
              <p
                onClick={() =>
                  dispatch(toggleQuantity({ sign: "+", id: cartItem.id }))
                }
              >
                +
              </p>
            </div>
            <p className="dFlex hideOnMobile">
              {" "}
              <FormatPrice price={price * cartItem.quantity} />
            </p>
            <p className="dFlex" onClick={() => handleRemoveFromCart(cartItem)}>
              <FaTrashAlt className="trash" />
            </p>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </Wrapper>
  );
};

export default CartItem;
