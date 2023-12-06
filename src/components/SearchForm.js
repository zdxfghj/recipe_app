import React from "react";
import { Link } from "react-router-dom";
import './searchForm.css'

const SearchForm = () => {

  return (
   <div className="page_start"  >
      <h1>Try find some healthy!</h1>
      <Link to={"/recipe"} className="button_link"> Try</Link>
   </div>
  );
};

export default SearchForm;