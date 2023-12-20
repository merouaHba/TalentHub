/* eslint-disable react/prop-types */

const InternshipCard = ({ image, text, title }) => {
  return (
    <div className="flex gap-x-5 p-5 border border-[#7367F029]  w-[49%]">
      <div className="w-1/5">
        <img src={image} alt="logo" className="h-full w-full object-cover" />
      </div>
      <div className="">
        <h5 className="text-main text-2xl leading-6">{title}</h5>
        <div className="flex gap-x-2">
          <p className="text-[#4D546F] text-base leading-base font-light">
            Posted by: {text}
          </p>
          <div className="alert px-2 py-1  bg-[#28C76F29] rounded-sm  font-semibold text-xs text-[#28C76F]">
            Active
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className=" cursor-pointer alert px-4 py-2  bg-[#7367F029] rounded-sm  font-semibold text-base text-[#7367F0]">
          Apply
        </div>
      </div>
    </div>
  );
};

export default InternshipCard