import React from "react";
import SliderOneCard from "../../partials/SliderOnePartials/SliderOneCard.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SliderOne.css";

import SliderOneImgOne from "../../assets/images/slider-one-img-01.jpg";
import SliderOneImgTwo from "../../assets/images/slider-one-img-02.jpg";
import SliderOneImgThree from "../../assets/images/slider-one-img-03.jpg";
import SliderOneImgFour from "../../assets/images/slider-one-img-04.jpg";
import SliderOneImgFive from "../../assets/images/slider-one-img-05.jpg";
import SliderOneImgSix from "../../assets/images/slider-one-img-06.jpg";
import SliderOneImgSeven from "../../assets/images/slider-one-img-07.jpg";
import SliderOneImgEight from "../../assets/images/slider-one-img-08.jpg";
import SliderOneImgNine from "../../assets/images/slider-one-img-09.jpg";
import SliderOneImgTen from "../../assets/images/slider-one-img-10.jpg";
import SliderOneImgEleven from "../../assets/images/slider-one-img-11.jpg";
import SliderOneImgTwelve from "../../assets/images/slider-one-img-12.jpg";

export default function SliderOne() {
  const sliderData1 = [
    {
      shoeName: "Superstar Mule Shoes",
      category: "Shoes",
      price: "6 999.00",
      img: SliderOneImgOne,
      id: 1,
    },
    {
      shoeName: "Streetball III Shoes",
      category: "Shoes",
      price: "13 999.00",
      img: SliderOneImgTwo,
      id: 2,
    },
    {
      shoeName: "Ozgaia Shoes",
      category: "Shoes",
      price: "8 999.00",
      img: SliderOneImgThree,
      id: 3,
    },
    {
      shoeName: "Forum Mod Low Shoes",
      category: "Shoes",
      price: "11 999.00",
      img: SliderOneImgFour,
      id: 4,
    },
    {
      shoeName: "Forum Mod Low Shoes",
      category: "Shoes",
      price: "11 999.00",
      img: SliderOneImgFive,
      id: 5,
    },
    {
      shoeName: "OZELIA Shoes",
      category: "Shoes",
      price: "10 999.00",
      img: SliderOneImgSix,
      id: 6,
    },
    {
      shoeName: "OZMILLEN Shoes",
      category: "Shoes",
      price: "10 999.00",
      img: SliderOneImgSeven,
      id: 7,
    },
    {
      shoeName: "Rivalry Low Shoes",
      category: "Shoes",
      price: "9 999.00",
      img: SliderOneImgEight,
      id: 8,
    },
    {
      shoeName: "Rivalry Low Shoes",
      category: "Shoes",
      price: "9 999.00",
      img: SliderOneImgNine,
      id: 9,
    },
    {
      shoeName: "Superstar Mule Shoes",
      category: "Shoes",
      price: "6 999.00",
      img: SliderOneImgTen,
      id: 10,
    },
    {
      shoeName: "Superstar Shoes",
      category: "Shoes",
      price: "10 999.00",
      img: SliderOneImgEleven,
      id: 11,
    },
    {
      shoeName: "Superstar Shoes",
      category: "Shoes",
      price: "10 999.00",
      img: SliderOneImgTwelve,
      id: 12,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1440 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1440, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive} className="slider-one">
        {sliderData1.map(({ shoeName, category, price, img, id }) => (
          <SliderOneCard
            key={id}
            shoeName={shoeName}
            category={category}
            price={price}
            img={img}
          />
        ))}
      </Carousel>
    </div>
  );
}
