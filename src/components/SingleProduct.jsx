import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getFeaturedProducts,
  getProductThunk,
} from "../Features/ProductsSlice";
import styled from "styled-components";
import FormatPrice from "./FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Button } from "./Button";
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
  let { id } = params;
  const dispatch = useDispatch();
  const store = useSelector((state) => state.products);
  let { all_products } = store;
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);
  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, [all_products]);

  let product = all_products.filter((el) => el.id === Number(id));
  const generateSingleProduct = (product) => {
    return (
      <Wrapper>
        <header>
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
            <div className="button">
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  };

  return (
    <div>
      {product ? generateSingleProduct(product[0]) : <h1>Loading...</h1>}
    </div>
  );
};

export default SingleProduct;
