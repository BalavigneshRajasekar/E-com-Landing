/* eslint-disable no-unused-vars */

import { Container, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Nav from "./Nav";
import { productContext } from "../Context";

function SingleProduct() {
  const { id } = useParams();
  const { singleProduct, setSingleProduct, products } =
    useContext(productContext);

  useEffect(() => {
    const data = products.find((prod) => {
      return prod._id === id;
    });

    setSingleProduct({ ...data });
  }, []);
  return (
    <>
      <Container>
        <Paper elevation={4}>
          <Typography variant="h3">Product Details</Typography>
          <Typography>Product ID: {id}</Typography>
          <Typography>Product ID:{singleProduct.name} </Typography>
        </Paper>
      </Container>
    </>
  );
}

export default SingleProduct;
