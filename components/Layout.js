import React from "react";
import Link from "next/link";

import SearchBar from "./SearchBar";

const Layout = ({ children }) => {
  return (
    <div>
      <SearchBar />
      <Link href='/register'>
        <a>Register</a>
      </Link>
      {children}
    </div>
  );
};

export default Layout;
