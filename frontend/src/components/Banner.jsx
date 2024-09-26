/* eslint-disable no-unused-vars */
import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import { Image } from "antd";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "offer1.jpg",
    caption: "Caption 1",
  },
  {
    url: "offer2.jpg",
    caption: "Caption 2",
  },
  {
    url: "offer3.jpg",
    caption: "Caption 3",
  },
];

function Banner() {
  return (
    <div>
      <div className="slide-container">
        <Slide canSwipe arrows={false} indicators duration={1000}>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <Image
                width="100%"
                height="400px"
                src={fadeImage.url}
                preview={false}
              />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Banner;
