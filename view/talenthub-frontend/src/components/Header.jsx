/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

import logo from "../assets/images/logo.svg";
import { HashLink } from "react-router-hash-link";
import Button from "./Button";

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="#ffc"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className={`${
      isOpen
        ? "fixed right-16 sm:right-20 md:right-24"
        : "absolute top-1/2 right-0 -translate-y-1/2 "
    }  z-50 cursor-pointer select-none p-2.5`}
  >
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export function Menu({ toggle }) {
  return (
    <nav className="menu fixed top-0 left-0 bottom-0 w-full text-white-yellow bg-main-gold pt-100px -translate-x-full will-change-transform">
      <ul className="flex flex-col items-center p-4 pt-32 gap-2.5">
        <li
          className="transform origin-[20px 50%] font-bold text-2xl p-2.5 will-change-transform will-change-opacity will-change-filter"
          onClick={toggle}
        >
          <HashLink smooth to="/">
            Home
          </HashLink>
        </li>
        <li
          className="transform origin-[20px 50%] font-bold text-2xl p-2.5 will-change-transform will-change-opacity will-change-filter"
          onClick={toggle}
        >
          <HashLink smooth to="/#about">
            About Us
          </HashLink>
        </li>
        <li
          className="transform origin-[20px 50%] font-bold text-2xl p-2.5 will-change-transform will-change-opacity will-change-filter"
          onClick={toggle}
        >
          <HashLink smooth to="/#special">
            Special
          </HashLink>
        </li>
        <li
          className="transform origin-[20px 50%] font-bold text-2xl p-2.5 will-change-transform will-change-opacity will-change-filter"
          onClick={toggle}
        >
          <HashLink smooth to="/#menu">
            Menu
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            {
              transform: "scale(1)",
              opacity: 1,
              filter: "blur(0px)",
            },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            {
              transform: "scale(0.5)",
              opacity: 0,
              filter: "blur(10px)",
            },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <header className="container mx-auto px-16 py-4 text-main">
      <div className="hidden md:flex justify-between items-center ">
        <div className=" w-1/6">
          <img src={logo} alt="logo" className="h-full w-full object-cover" />
        </div>
        <ul className="flex justify-between items-center w-2/5  font-llight text-base leading-base">
          <li className="cursor-pointer">
            <HashLink smooth to="/">
              Home
            </HashLink>
          </li>
          <li className="cursor-pointer">
            <HashLink smooth to="/#about">
              Features
            </HashLink>
          </li>
          <li className="cursor-pointer">
            <HashLink smooth to="/#special">
              Offers
            </HashLink>
          </li>
          <li className="cursor-pointer">
            <HashLink smooth to="/#menu">
             Testimonials
            </HashLink>
          </li>
          <li className="cursor-pointer">
            <HashLink smooth to="/#menu">
             Contact
            </HashLink>
          </li>

        </ul>
        <Button text={"Join For Free"} link={"/register"}/>
      </div>
      <div className="md:hidden h-full " ref={scope}>
        <div className="flex justify-between items-center p-2 h-full relative bg-gradient">
          <div className=" w-1/6">
            <img src={logo} alt="logo" className="h-full w-full object-cover" />
          </div>

          <MenuToggle isOpen={isOpen} toggle={toggle} />
        </div>

        <div>
          <Menu toggle={toggle} />
        </div>
      </div>
    </header>
  );
}
