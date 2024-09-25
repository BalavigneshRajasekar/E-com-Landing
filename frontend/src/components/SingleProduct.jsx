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

import { productContext } from "../Context";
import { Checkbox } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function SingleProduct() {
  const { id } = useParams();
  const { singleProduct, setSingleProduct, products } =
    useContext(productContext);

  useEffect(() => {
    const data = products.find((prod) => {
      return prod._id === id;
    });

    setSingleProduct({ ...data });
    console.log(singleProduct);
  }, []);
  const Check = () => {};
  return (
    <>
      <Container>
        <Paper elevation={4}>
          <div className="d-md-flex">
            <div className="">
              <img
                src={singleProduct.image}
                style={{ width: "300px", height: "400px" }}
                className="p-3"
              ></img>
            </div>
            <div>
              <Typography variant="h3" className="fw-lighter p-3">
                {singleProduct.name}
              </Typography>
              <Divider textAlign="left">LEFT</Divider>
              <Rating
                value={singleProduct.rating}
                readOnly
                size="medium"
                color="primary"
                className="ps-3"
              />
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
                Color : <span>{singleProduct.color}</span>
              </Typography>
              <Typography className="p-2" variant="h6" sx={{ color: "black" }}>
                Size :
              </Typography>
              {/* <div className="ms-5">
                {singleProduct.size.map((sizes, index) => (
                  <>
                    {sizes}
                    <Checkbox
                      key={index}
                      value={sizes}
                      onClick={(e) => Check(e)}
                    />
                  </>
                ))}
              </div> */}
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
