import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  .user-login--name {
    text-transform: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      // font-size: 5rem;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      transition: all 1s linear;

      .navbar-link {
        font-size: 4.2rem !important;
      }
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: top;
      transition: all 1s linear;

      .navbar-link {
        font-size: 4.2rem;
      }
    }
    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;
const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <Nav>
      <div className={active && "active"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setActive(false)}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              to={"/about"}
              onClick={() => setActive(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              to={"/products"}
              onClick={() => setActive(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              to={"/contact"}
              onClick={() => setActive(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link cart-trolley--link" to={"/cart"}>
              <FaShoppingCart className="cart-trolley" />
              {/* <span className="cart-total--item">{cart?.length}</span> */}
            </NavLink>
          </li>
        </ul>
        {/* Buttons for open and close */}
        <div className="mobile-navbar-btn">
          <FiMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setActive(true)}
          />
          <IoMdClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setActive(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
