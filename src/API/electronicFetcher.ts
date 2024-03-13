// Assuming your loader function returns a Promise<Product[]>
const electronicsFetcher = async () => {
  // Fetch your data here
  const resp = await fetch(
    `https://fakestoreapi.com/products/category/electronics`
  );
  const data = resp.json;

  return data; // Assuming 'data' is an array of Product
};

export default electronicsFetcher;
