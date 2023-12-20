/* eslint-disable react/prop-types */

const FeatureCard = ({image,text,title}) => {
  return (
    <div className="flex justify-between  w-[45%]">
      <div className="w-1/3">
        <img src={image} alt="logo" className="h-full w-full object-cover" />
      </div>
      <div className="mt-4">
        <h5 className="text-main text-2xl leading-6">{title}</h5>
        <p className="text-[#4D546F] text-base leading-base font-light">
          {text}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard