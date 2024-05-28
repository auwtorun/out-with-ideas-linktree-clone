import React from "react";

const MenuList = ({ menus }) => {
  const rupiah = (angka) => {
    return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <div className="menu-list">
      <ul>
        {menus &&
          menus.map((menu, index) => (
            <li key={index} className="menu-card">
              <div className="menu-card-content">
                <h2>{menu.name}</h2>
                <p>{menu.description}</p>
                <p>{rupiah(menu.price)}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MenuList;
