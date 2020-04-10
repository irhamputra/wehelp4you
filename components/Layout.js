import React from "react";
import SearchBar from "./SearchBar";

const Layout = ({ children }) => {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
};

export default Layout
