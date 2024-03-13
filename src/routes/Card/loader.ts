type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
};

// Assuming your loader function returns a Promise<Product[]>
const loader = async (params: string) => {
  try {
    const category = params;
    const resp = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await resp.json();
    if (resp.ok) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default loader;
