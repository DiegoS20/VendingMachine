import React, { useState, useEffect } from "react";
import getProducts from "../../services/getProducts";

export default function Index() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return <div></div>;
}
