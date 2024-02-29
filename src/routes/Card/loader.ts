import { LoaderFunction } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
};

// Assuming your loader function returns a Promise<Product[]>
const loader: LoaderFunction<{ data: Product[] }> = async (params) => {
  const category = { params };
  // Fetch your data here
  const resp = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = resp.json;

  return { data }; // Assuming 'data' is an array of Product
};

export default loader;
