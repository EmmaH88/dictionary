import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert("Searching 🤔");
  }

  function handleKeywordSearch(event) {
    console.log(event);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordSearch} />
      </form>
    </div>
  );
}
