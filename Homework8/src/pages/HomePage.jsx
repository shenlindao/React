import React from "react";
import Brand from "../components/Brand";
import Categories from "../components/Categories";
import Catalog from "../components/Catalog";
import Advantages from "../components/Advantages";
import Featured from "../components/Featured";

const HomePage = () => {
  return (
    <>
      <Brand />
      <Categories />
      <Featured />
      <Catalog />
      <Advantages />
    </>
  );
};

export default HomePage;
