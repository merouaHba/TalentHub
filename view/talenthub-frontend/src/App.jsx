/* eslint-disable no-unused-vars */

import "./App.css";

import { Footer, Header } from "./components";
import { AnimatePresence } from "framer-motion";
import { Outlet, useHref, useLocation, useNavigation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    // <AnimatePresence mode="wait">
      <div className=" h-auto flex flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    // </AnimatePresence>
  );
}

export default App;
