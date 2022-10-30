import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import CategoryList from "../components/Categories/CategoryList";
import HomeCards from "../components/Post/HomeCards/HomeCards";
const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <CategoryList></CategoryList>
      <HomeCards></HomeCards>
    </>
  );
};

export default Home;
