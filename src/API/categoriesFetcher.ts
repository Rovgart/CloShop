import React from "react";

export const categoriesFetcher = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data: string[] | unknown = await response.json();
    if (response.ok) {
      console.log("Succesfully returned data");
      console.log(data);

      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
};
