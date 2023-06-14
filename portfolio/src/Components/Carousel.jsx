import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const breakpoint = [
    {
  width:1   ,itemsToShow:1},
{width:  550 ,itemsToShow:2},
        {width: 768  ,itemsToShow:3},
        {width:1200,itemsToShow:4}
];

export const Carousal = () => {
  return (
    <Carousel breakpoint={breakpoint}>
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "10px",
          background: "blue",
        }}
      >
        one
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "10px",
          background: "blue",
        }}
      >
        two
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "10px",
          background: "blue",
        }}
      >
        three
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "10px",
          background: "blue",
        }}
      >
        three
      </div>
    </Carousel>
  );
}
