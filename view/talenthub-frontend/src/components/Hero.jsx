import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex  container mx-auto px-16 py-40">
      <div className="w-1/5"></div>
      <div className="text-center w-3/5">
        <h1 className="text-6xl text-main font-semibold">
          Take Control of your Internship Experience
        </h1>
        <p className="my-9 text-[#4D546F] text-base leading-base font-light">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <div className="flex justify-center">
          <Button text="explore Offers" link="" />
        </div>
      </div>
      <div className="w-1/5"></div>
    </div>
  );
}

export default Hero