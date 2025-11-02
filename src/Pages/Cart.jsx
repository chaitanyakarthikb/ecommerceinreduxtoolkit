import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { Button } from "../components/Button";
import { clearCart } from "../Features/CartsSlice";

const Cart = () => {
  const Wrapper = styled.section`
    .headerFields {
      margin-top: 3rem;
      margin-bottom: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .headerFields div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cartItems {
      height: 250px;
      overflow-y: scroll;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 5rem;

      #red {
        background-color: #ff7062;
      }
    }

    .subtotalBox {
      background-color: ${({ theme }) => theme.colors.bg};
      width: 35%;
      margin-left: auto;
      margin-top: 2rem;
      padding: 1rem 2rem;
      div {
        display: flex;
        justify-content: space-between;
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .hideOnMobile {
        display: none;
      }
    }
  `;
  let cartItems = useSelector((state) => state.cart.cartItems);
  const headerFields = ["ITEM", "PRICE", "QUANTITY", "SUBTOTAL", "REMOVE"];
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="container">
        <div className="headerFields grid grid-five-column">
          {headerFields.map((el) => {
            return (
              <div>
                <p
                  className={
                    el === "PRICE" || el === "SUBTOTAL" ? "hideOnMobile" : ""
                  }
                >
                  {el}
                </p>
              </div>
            );
          })}
        </div>
        <hr></hr>
        <div className="cartItems ">
          {cartItems.length === 0 ? (
            <h1>No Items Added in the cart</h1>
          ) : (
            cartItems.map((el) => {
              return <CartItem item={el} />;
            })
          )}
        </div>
        <div className="buttons">
          <Button>Continue shopping</Button>
          <Button
            id="red"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </Button>
        </div>
        <div className="subtotalBox">
          <div>
            <p>SubTotal</p>
            <p>100</p>
          </div>

          <div>
            <p>Shipping Fee</p>
            <p>100</p>
          </div>

          <hr />
          <div>
            <p>Order Total:</p>
            <p>150</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
