/* eslint-disable no-unused-vars */

import {
  Button,
  Container,
  Divider,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import axios, { Axios } from "axios";

import { productContext } from "../Context";
import { Checkbox } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function SingleProduct() {
  const { id } = useParams();
  const { singleProduct, setSingleProduct, products } =
    useContext(productContext);

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const fetchSingleProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api1/dress/get/${id}`
      );
      setSingleProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const Check = () => {};
  return (
    <>
      <Container>
        <Paper elevation={4}>
          <div className="d-flex gap-4 flex-column flex-md-row p-3">
            <div className="">
              <img
                src={singleProduct.image}
                style={{ width: "100%", height: "400px" }}
                className="p-3"
              ></img>
            </div>
            <div>
              <Typography variant="h3" className="fw-lighter p-3">
                {singleProduct.name}
              </Typography>
              <Divider textAlign="left">
                {" "}
                <Rating
                  value={singleProduct.rating}
                  readOnly
                  size="medium"
                  color="primary"
                  className="ps-3"
                />
              </Divider>

              <Typography className="p-2" variant="h6">
                Description : {singleProduct.description}
              </Typography>
              <Typography className="p-2" variant="h4" sx={{ color: "red" }}>
                Price : {singleProduct.price + "/-"}
              </Typography>
              <Typography className="p-2" variant="h6" sx={{ color: "grey" }}>
                MRP incl. of all taxes
              </Typography>
              <Typography className="p-2" variant="h6" sx={{ color: "grey" }}>
                Color :{" "}
                <span style={{ color: singleProduct.color }}>
                  {singleProduct.color}
                </span>
              </Typography>
              <Typography className="p-2" variant="h6" sx={{ color: "black" }}>
                Size :
              </Typography>
              <div className="ms-5">
                {singleProduct.size &&
                  singleProduct.size.map((sizes, index) => (
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
              <Typography variant="h6">Quantity :</Typography>
              <div className="">
                <select
                  style={{
                    width: "100px",
                    outline: "none",
                    border: "1px solid grey",
                    height: "30px",
                    borderRadius: "5px",
                    marginTop: "5px",
                    color: "orange",
                    fontWeight: 700,
                    textAlign: "center",
                    marginLeft: "70px",
                  }}
                  defaultValue="1"
                >
                  {Array.from(
                    { length: singleProduct.stock },
                    (_, index1) => index1 + 1
                  ).map((quan, index2) => (
                    <option value={quan} key={index2}>
                      {quan}
                    </option>
                  ))}
                  ;
                </select>
                <Button
                  variant="outlined"
                  startIcon={<ShoppingCart />}
                  sx={{ marginLeft: "50px" }}
                >
                  Add to Cart
                </Button>
              </div>
              <div style={{ width: "300px", padding: "20px" }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: "100%", padding: "10px", marginX: "70px" }}
                >
                  Buy It now{" "}
                </Button>
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </>
  );
}

export default SingleProduct;
