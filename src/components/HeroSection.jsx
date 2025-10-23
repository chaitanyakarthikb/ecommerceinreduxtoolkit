import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="container">
      <div className="grid grid-two-column">
        <div className="content--container">
          <p id="content--welcome">Welcome to</p>
          <h1>Basva Store</h1>
          <p id="content--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            placeat veritatis voluptates beatae, sapiente impedit nihil corrupti
            eveniet obcaecati ex possimus non doloribus dicta, excepturi natus
            necessitatibus sit provident ullam reiciendis soluta. Itaque vero
            amet quos corrupti nesciunt nam hic
          </p>
          <Button>
            <Link to={"/products"}>Shop Now</Link>
          </Button>
        </div>

        <div className="hero--section--img">
          <figure>
            <img src="/images/hero.jpg" alt="Hero" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
