# CloShop Project
CloShop is a React-based web application designed to provide users with an intuitive interface for purchasing jewelry, electronics, and clothing. The project utilizes React, React Router, and integrates with the Fake Store API to fetch product data. With CloShop, users can easily navigate through different product categories, add items to their cart, and proceed to checkout seamlessly.

# Features
    *Product Categories: CloShop offers a variety of product categories including jewelry, electronics, and clothing. Users can browse through these categories to find desired items.
    *Product Listings: Each product category page displays a list of products with essential details such as name, price, and image.
    *Product Details: Users can view detailed information about each product by clicking on its listing. This includes additional images, description, and specifications.
    *Add to Cart: Users can add products to their cart directly from the product listing or product details page.
    *Shopping Cart: CloShop maintains a shopping cart where users can review the items they've added, adjust quantities, and remove items if needed.
    *Checkout Process: Once satisfied with their selection, users can proceed to checkout. The checkout process collects necessary information such as shipping address and payment details.
    *Responsive Design: The UI is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.
    
# Technologies Used
    * React: CloShop is built using React, a popular JavaScript library for building user interfaces.
    * React Router: React Router is utilized for handling navigation within the application, enabling smooth transitions between different pages.
    * Fake Store API: The Fake Store API provides mock e-commerce data, including product listings and details, which CloShop fetches to populate its content.

## Getting Started
To run CloShop locally on your machine, follow these steps:
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm install or yarn install.
4. Start the development server using npm start or yarn start
5. Open your web browser and visit http://localhost:5173 to view CloShop.
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

## Contributing
Contributions to CloShop are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.
- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
- ## License
This project is licensed under the MIT License. See the LICENSE file for details.
