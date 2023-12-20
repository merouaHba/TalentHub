/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";

const Button = ({text,link}) => {
  return (
    <div className="py-[0.5625rem] px-[1.5rem] shadow-sm rounded-md bg-gradient text-center m-0 flex justify-center items-center">
      <HashLink smooth to={link}>
        <p className=" capitalize text-lg text-white">
          {text}
        </p>
      </HashLink>
    </div>
  );
}

export default Button