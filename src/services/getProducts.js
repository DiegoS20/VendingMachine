const getProducts = () =>
  fetch("https://vending-machine-test.vercel.app/api/products").then((res) =>
    res.json()
  );
export default getProducts;
