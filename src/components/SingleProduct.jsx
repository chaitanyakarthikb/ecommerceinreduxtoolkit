import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

import {
  getFeaturedProducts,
  getProductThunk,
} from "../Features/ProductsSlice";
import styled from "styled-components";
import FormatPrice from "./FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Button } from "./Button";
import { addTocart } from "../Features/CartsSlice";
const Wrapper = styled.section`
  .container {
    padding: 5rem 5rem;
  }
  header p {
    font-size: 2.5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 2rem 1rem;
  }
  .bold {
    font-weight: 700;
    padding: 1rem 0;
  }
  .dod {
    padding: 1rem 0;
    font-weight: 700;
    color: rgb(98 84 243);
  }
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
    }
  }

  .content--title {
    padding: 1rem 0;
  }

  .button {
    padding-top: 2rem;
  }

  .addToCartButtons {
    display: flex;
    width: 15%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
  }

  .icons {
    display: flex;
    padding: 1rem 0;

    justify-content: space-around;

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .warranty-icon {
      font-size: 5rem;
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 50%;
      padding: 1rem 1rem;
    }
  }

  .cautionText p {
    color: #ff4848;
    font-weight: 300;
    user-select: none;
  }

  .addToCartIcon {
    font-size: 2.3rem;
    margin-top: 0.3rem;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .img {
      display: flex;
      justify-content: start;
      align-items: center;
      img {
        width: 60%;
      }
    }

    .icons {
      display: flex;
      padding: 1rem 0;

      justify-content: space-around;

      .icon {
        p {
          font-size: 1.5rem;
        }
      }

      .warranty-icon {
        font-size: 5rem;
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 50%;
        padding: 1rem 1rem;
      }
    }
  }
`;

const SingleProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  let { id } = params;
  const dispatch = useDispatch();
  const store = useSelector((state) => state.products);
  let { all_products } = store;
  const myRef = useRef();

  useEffect(() => {
    dispatch(getProductThunk());
  }, []);
  useEffect(() => {
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, [all_products]);

  const [quantitySelected, setQuantitySelected] = useState(0);

  const handleAddToCart = () => {
    if (quantitySelected === 0) {
      setQuantitySelected((prev) => prev + 1);
    } else {
      let cartItemObj = {
        ...product,
        quantity: quantitySelected,
      };
      dispatch(addTocart(cartItemObj));
      navigate("/cart");
    }
  };

  let product = all_products.find((el) => el.id === Number(id));

  const generateSingleProduct = (product) => {
    return (
      <Wrapper>
        <header ref={myRef}>
          <p>
            <Link to={"/"}>Home</Link>/{product?.title}
          </p>
        </header>
        <div className="container grid grid-two-column">
          <div className="img">
            <img src={product?.images[0]} alt="" />
          </div>
          <div className="content">
            <h2 className="content--title">{product?.title}</h2>
            <p className="bold">
              MRP: <FormatPrice price={product?.price} />{" "}
            </p>
            <p className="dod">
              Deal Of The day:{" "}
              <FormatPrice
                price={product?.price * (1 - product?.discountPercentage / 100)}
              />{" "}
            </p>
            <p>{product?.description}</p>

            <div className="icons">
              <div className="icon">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery**</p>
              </div>
              <div className="icon">
                <TbReplace className="warranty-icon" />
                <p>
                  {product?.category === "groceries"
                    ? "Farm Fresh"
                    : "30 Days Replacement"}
                </p>
              </div>
              <div className="icon">
                <MdSecurity className="warranty-icon" />
                <p>Quality Assured</p>
              </div>
            </div>
            <hr></hr>
            {quantitySelected > 0 && (
              <>
                <div className="addToCartButtons">
                  <p onClick={() => setQuantitySelected((prev) => prev - 1)}>
                    {" "}
                    <RiSubtractFill className="addToCartIcon" />{" "}
                  </p>
                  <h3>{quantitySelected}</h3>
                  <p onClick={() => setQuantitySelected((prev) => prev + 1)}>
                    <IoMdAdd className="addToCartIcon" />
                  </p>
                </div>
                <div className="cautionText">
                  <p>Please select the number of items</p>
                </div>
              </>
            )}
            <div className="button">
              <Button onClick={() => handleAddToCart()}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  };

  return (
    <div>{product ? generateSingleProduct(product) : <h1>Loading...</h1>}</div>
  );
};

export default SingleProduct;
