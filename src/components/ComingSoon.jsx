import React from "react";
import styled from "styled-components";

const ComingSoon = () => {
  const Wrapper = styled.section`
    .container {
      h1 {
        padding-top: 25px;
      }
    }
  `;
  return (
    <Wrapper>
      <div className="container">
        <h1>Further Functionality coming soon. Stay tuned.</h1>
      </div>
    </Wrapper>
  );
};

export default ComingSoon;
