import React from "react";
import MenuList from "./MenuList";

const Menu = () => {
  const menus = [
    {
      name: "Brownies",
      description: "A nice chocolate flavour",
      price: "50000",
      categories: "Cake",
    },
    {
      name: "Cold Brew",
      description: "A smooth coffee taste",
      price: "20000",
      categories: "Drink",
    },
    {
      name: "Croffle",
      description: "A nice sweet croffle",
      price: "30000",
      categories: "Cake",
    },
  ];
  return (
    <div>
      <MenuList menus={menus} />
    </div>
  );
};

export default Menu;
