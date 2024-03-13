const productFetcher = async () => {
  try {
    const resp = await fetch("https://fakestoreapi.com/products/1");

    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default productFetcher;
