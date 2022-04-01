import React, { useState, useEffect } from "react";

import Header from "../Header";

import getProducts from "../../services/getProducts";

import "./index.scss";

export default function Index() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}
