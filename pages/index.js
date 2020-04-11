import React from "react";
import SearchBar from "../components/SearchBar";
import image from "../public/image2.png";

const Home = () => (
  <div className='mt-5'>
    <h2 style={{ textAlign: "center" }}>We want to help people</h2>
    
    <div className='d-flex justify-content-center'>
      <img className='img-fluid mt-3' src={image} width='70%' alt='img' />
    </div>

    <SearchBar />

    <p style={{ textAlign: "center" }}>
      This app is built for people to people. Let's help each other to fight Coronavirus
    </p>
  </div>
);

export default Home;
