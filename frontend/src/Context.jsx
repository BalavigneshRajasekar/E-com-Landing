/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import React from "react";

export const productContext = createContext();

const States = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState();
  const [singleProduct, setSingleProduct] = useState({});
  const [filter, setFilter] = useState([]);

  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        filter,
        setFilter,
        singleProduct,
        setSingleProduct,
        value,
        setValue,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default States;
