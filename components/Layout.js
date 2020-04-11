import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  let slug;

  if (pathname === "/") slug = "WeHelp4You.com";
  else if (pathname === "/account") slug = "Account";
  else if (pathname === "/register") slug = "Register";
  else if (pathname === "/search") slug = "Search";

  return (
    <div className='container'>
      <header className='bg-white fixed-top text-center'>
        <p className='py-2 m-0'>
          <strong>{slug}</strong>
        </p>
      </header>

      {children}

      <footer className='fixed-bottom py-1 text-center'>
        <div className='container'>
          <div className='d-flex justify-content-between'>
            <div>
              <Link href='/'>
                <a>
                  <div>
                    <AiOutlineHome style={{ fontSize: "20px" }} />
                  </div>
                  <small>Home</small>
                </a>
              </Link>
            </div>

            <div>
              <Link href='/search'>
                <a>
                  <div>
                    <AiOutlineSearch style={{ fontSize: "20px" }} />
                  </div>
                  <small>Search</small>
                </a>
              </Link>
            </div>

            <div>
              <Link href='/account'>
                <a>
                  <div>
                    <AiOutlineUser style={{ fontSize: "20px" }} />
                  </div>
                  <small>Account</small>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: "GT Walsheim Pro", sans-serif;
        }

        a {
          text-decoration: none;
          color: black;
        }

        footer {
          background-color: whitesmoke;
          border-top: 0.8px solid lightgray;
        }
      `}</style>
    </div>
  );
};

export default Layout;
