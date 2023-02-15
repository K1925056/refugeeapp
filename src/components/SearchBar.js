import React from "react";
import './SearchBar.css'
const SearchBar = () => {
  return (
    <div className="SearchBar" >
      <input
        type="text"
        placeholder="Search"
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px",
        }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://via.placeholder.com/50x50"
          alt="Profile"
          style={{ borderRadius: "50%", marginLeft: "10px" }}
        />
        <div>
          <p style={{ margin: 5 }}>John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
