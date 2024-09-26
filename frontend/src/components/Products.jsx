/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { Segmented } from "antd";
import { productContext } from "../Context";
import axios, { Axios } from "axios";
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Empty } from "antd";

function Products() {
  const { products, setProducts, filter, setFilter } =
    useContext(productContext);
  const navigate = useNavigate();

  // Initial page load this useffect call the function for data fetch
  useEffect(() => {
    fetchProducts();
  }, []);

  //Function to fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api1/dress/get");
      console.log(response);
      setProducts(response.data);
      setFilter(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  //Handle Filters
  const handleFilter = (value) => {
    switch (value) {
      case "All":
        setFilter(products);
        break;
      case "Men":
        setFilter(
          products.filter((value) => {
            return value.type == "men";
          })
        );

        break;
      case "Women":
        setFilter(
          products.filter((value) => {
            return value.type == "women";
          })
        );
        break;
      case "Electronics":
        setFilter(
          products.filter((value) => {
            return value.type == "electronics";
          })
        );
        break;
      case "Home Appliances":
        setFilter(
          products.filter((value) => {
            return value.type == "home appliance";
          })
        );
        break;
      default:
        setFilter();
        break;
    }
  };

  //Handle checkbox for sizes
  const Check = (e) => {
    console.log(e.target.value);
  };

  // Handle single view products
  const singleView = (e, id) => {
    if (
      e.target.tagName == "BUTTON" ||
      e.target.tagName == "svg" ||
      e.target.tagName == "INPUT" ||
      e.target.tagName == "SELECT"
    ) {
      return;
    }
    console.log(id);
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <div className="d-flex justify-content-end">
        <div>
          <Segmented
            style={{}}
            options={["All", "Men", "Women", "Electronics", "Home Appliances"]}
            onChange={(value) => handleFilter(value)}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center  gap-3 mt-5">
        {filter.length > 0 ? (
          filter.map((product) => (
            <div
              key={product._id}
              className="card-div"
              onClick={(e) => singleView(e, product._id)}
            >
              <div className="card ">
                <div className="card-img">
                  <div className="p-3">
                    <img
                      src={product.image}
                      style={{ width: "200px", height: "200px" }}
                    ></img>
                  </div>
                </div>
                <div className="card-title">{product.name}</div>
                <div className="fw-bold d-flex justify-content-between">
                  <div>
                    {product.size.map((sizes, index) => (
                      <>
                        {sizes}
                        <Checkbox
                          key={index}
                          value={sizes}
                          onClick={(e) => Check(e)}
                        />
                      </>
                    ))}
                  </div>
                  <select
                    style={{
                      width: "50px",
                      outline: "none",
                      border: "1px solid grey",
                      height: "30px",
                      borderRadius: "5px",
                      marginTop: "10px",
                      color: "orange",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                    defaultValue="1"
                  >
                    {Array.from(
                      { length: product.stock },
                      (_, index1) => index1 + 1
                    ).map((quan, index2) => (
                      <option value={quan} key={index2}>
                        {quan}
                      </option>
                    ))}
                    ;
                  </select>
                </div>

                <div>
                  <Rating
                    value={product.rating}
                    readOnly
                    size="small"
                    color="primary"
                  />
                </div>
                <div className="card-footer">
                  <div className="card-price">
                    <span>$</span>
                    {product.price}
                  </div>
                  <button className="card-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                      <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                      <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                      <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Empty description="No products found" />
        )}
      </div>
    </div>
  );
}

export default Products;
