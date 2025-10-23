import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Link to={"/"}>
          <h2>𝓑𝓪𝓼𝓿𝓪 𝓢𝓽𝓸𝓻𝓮</h2>
        </Link>
      </div>
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
`;

export default Header;
