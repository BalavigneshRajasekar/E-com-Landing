/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Fade, Slide } from "react-slideshow-image";
import { Image } from "antd";
import "react-slideshow-image/dist/styles.css";
import { Input, Space } from "antd";
import { productContext } from "../Context";
const { Search } = Input;
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
  const { filter, setFilter, products } = useContext(productContext);

  //Handle search parameter
  const handleSearch = (value) => {
    if (value.target.value == "") {
      console.log("hello");
      setFilter([...products]);
      return;
    }
    const filtered = filter.filter((values) => {
      return values.name
        .toLowerCase()
        .includes(value.target.value.toLowerCase());
    });
    setFilter(filtered);
  };
  return (
    <div>
      <div className="slide-container mt-3">
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
      <div className="mt-3">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onChange={handleSearch}
          style={{ width: "100%", padding: "20px" }}
        />
      </div>
    </div>
  );
}

export default Banner;
