import React from "react";
import MenuList from "./MenuList";

const Menu = () => {
  const menus = [
    {
      name: "Brownies",
      description: "A nice chocolate flavour",
      price: "50000",
      categories: "Cake",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Cold Brew",
      description: "A smooth coffee taste",
      price: "20000",
      categories: "Drink",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Croffle",
      description: "A nice sweet croffle",
      price: "30000",
      categories: "Cake",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Brownies",
      description: "A nice chocolate flavour",
      price: "50000",
      categories: "Cake",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Cold Brew",
      description: "A smooth coffee taste",
      price: "20000",
      categories: "Drink",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Croffle",
      description: "A nice sweet croffle",
      price: "30000",
      categories: "Cake",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Brownies",
      description: "A nice chocolate flavour",
      price: "50000",
      categories: "Cake",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Cold Brew",
      description: "A smooth coffee taste",
      price: "20000",
      categories: "Drink",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Croffle",
      description: "A nice sweet croffle",
      price: "30000",
      categories: "Cake",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Brownies",
      description: "A nice chocolate flavour",
      price: "50000",
      categories: "Cake",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Cold Brew",
      description: "A smooth coffee taste",
      price: "20000",
      categories: "Drink",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
    {
      name: "Croffle",
      description: "A nice sweet croffle",
      price: "30000",
      categories: "Cake",
      image: "https://cookingfrog.com/wp-content/uploads/2022/11/Homemade-Croffle-Recipe-Croissant-Waffles.jpg"
    },
  ];
  return (
    <div>
      <MenuList menus={menus} />
    </div>
  );
};

export default Menu;
