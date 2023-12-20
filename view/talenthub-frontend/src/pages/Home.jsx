/* eslint-disable no-unused-vars */
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../redux/reducers/MenuSlice";
import { Features, Hero, Reviews, TrendingInternShip } from "../components";

const Home = () => {

  return (
    <>
      <Hero />
      <Features />
      <TrendingInternShip />
      <Reviews/>
    </>
  )
}

export default Home