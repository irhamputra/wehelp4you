import React from "react";
import SearchBar from "../components/SearchBar";
import image from "../public/image2.png";

const Home = () => (
  <>
    <h2 style={{ textAlign: "center" }}>We want to help people</h2>

    <img className='img-fluid mt-3' src={image} width='100%' alt='img' />

    <SearchBar />

    <p style={{ textAlign: "center" }}>
      This app is built for people to people. Let's help each other to fight Coronavirus
    </p>
  </>
);

export default Home;
