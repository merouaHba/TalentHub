import bookmarks from '../assets/images/bookmarks.svg'
import InternshipCard from './InternshipCard';
import img from '../assets/images/img.svg';

const TrendingInternShip = () => {
  return (
    <div className=" container mx-auto px-16 pb-40">
      <div className="flex justify-center">
        <div className="text-center flex justify-center flex-col items-center">
          <h1 className="text-6xl text-main font-semibold">
            Trending Internship Offers
          </h1>
          <p className="my-9 text-[#4D546F] text-base leading-base font-light w-4/5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </p>
        </div>
      </div>
      <div className="text-left">
        <div className="mb-5 alert w-56 px-10 py-2 border-2 rounded-md border-[#28C76F] flex justify-center items-center gap-1">
          <div className="">
            <img
              src={bookmarks}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-sm font-semibold text-[#28C76F]">
            Available Offers
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-3">
          <InternshipCard text="GDSC" title="Electrical Engineer Internship" image={img} />
          <InternshipCard text="GDSC" title="Electrical Engineer Internship" image={img} />
          <InternshipCard text="GDSC" title="Electrical Engineer Internship" image={img} />
          <InternshipCard text="GDSC" title="Electrical Engineer Internship" image={img} />
          <InternshipCard text="GDSC" title="Electrical Engineer Internship" image={img} />
        </div>
      </div>
    </div>
  );
}

export default TrendingInternShip