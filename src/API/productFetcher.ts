interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: object;
  // other properties
}

const productFetcher = async () => {
  const resp = await fetch("https://fakestoreapi.com/products/1");
  const product: Product = resp.json();

  return product;
};
export default productFetcher;
