import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";

const MenuList = ({ menus }) => {
  const noResultsText = "Oops, sorry, there is nothing :(";
  const
 [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);

    return
 () => clearTimeout(timeout);
  }, [searchText]);


  const filteredMenu = menus.filter((item) =>
  item.name.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
  item.description.toLowerCase().includes(debouncedSearchText.toLowerCase())
);


  const rupiah = (angka) => {
    return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="menu-container">
    <div className="search-button-parent
">
    <BackButton/>
    <input
      className="search-button"
        type="text"
        placeholder="Search menu..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
    {filteredMenu.length === 0 && <div className="no-results">{noResultsText}</div>}
    <div className="menu-list">
      {filteredMenu.map((menu, index) => (
        <div key={index} className="menu-card">
          <img src={menu.image} alt={menu.name} className="menu-card-image" />
          <div className="menu-card-content">
            <h2>{menu.name}</h2>
            <p>{menu.description}</p>
            <p>{rupiah(menu.price)}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MenuList;
