import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";


import Footer from "../components/Footer";
import Header from "../components/Header";

export const IndexLayout = () => {
  return (
    <>
      <Banner/>  
      <Header />
      <Outlet />
     <Footer />  
    </>
  );
};