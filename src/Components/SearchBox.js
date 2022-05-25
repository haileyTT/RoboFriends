import React from "react";

function SearchBox({searchChange}){
  return (
      <div className="pa2">
        <input type='search' 
        className="pa3 ba b--dark-pink bg-washed-red"
        placeholder="search robots" 
        onChange = {searchChange}/>
      </div>
  );
}

export default SearchBox;
