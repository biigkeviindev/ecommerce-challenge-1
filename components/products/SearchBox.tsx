import React from "react";

export default function SearchBox() {
  return (
    <div className="search-box">
      <input
        className="search-box"
        placeholder="Search for a smartphone..."
        type="text"
      />
      <p className="search-box__size-items">20 RESULTS</p>
    </div>
  );
}
