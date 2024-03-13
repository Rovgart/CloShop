type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
};

// Assuming your loader function returns a Promise<Product[]>
const jewelryFetcher = async () => {
  // Fetch your data here
  const resp = await fetch(
    `https://fakestoreapi.com/products/category/jewelry`
  );
  const data = resp.json;

  return data; // Assuming 'data' is an array of Product
};

export default jewelryFetcher;
