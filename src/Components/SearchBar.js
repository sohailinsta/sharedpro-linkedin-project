import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";
function SearchBar() {
  return (
      <>
        <input className="input-box" type="text" 
        placeholder="Search"
        />
     <SearchIcon className="margin-search-icon"/>
        </>
  )
}

export default SearchBar