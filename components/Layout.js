import React from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <header style={{ textAlign: "center", paddingTop: "15px" }}>
        <p>
          <strong>WeHelp4You.com</strong>
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
