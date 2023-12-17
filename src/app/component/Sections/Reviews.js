"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];

export default function Reviews(props) {
  return (
    <div className="reviews">
      <Carousel
        className="carussel"
        autoPlay={false}
        animation="slide"
        height={200}
        navButtonsAlwaysVisible
      >
        {items.map((item, i) => (
          <Review key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Review(props) {
  return (
    <Paper elevation={24} className="review">
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
}
