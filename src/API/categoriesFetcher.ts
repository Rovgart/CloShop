import React from "react";

export const categoriesFetcher = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    if (response.ok) {
      console.log("Succesfully returned data");
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
};
