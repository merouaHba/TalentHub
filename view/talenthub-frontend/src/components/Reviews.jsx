import ReviewCard from "./ReviewCard";
import profile from '../assets/images/profile.svg'

const Reviews = () => {
  return (
    <div className=" container mx-auto px-16 pb-40">
      <div className="flex justify-center">
        <div className="text-center flex justify-center flex-col items-center">
          <h1 className="text-6xl text-main font-semibold">
            What our users have to say
          </h1>
          <p className="my-9 text-[#4D546F] text-base leading-base font-light w-4/5">
            Lorem ipsum dolor sit amet, tincidunt vestibulum.
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap">
        <ReviewCard
                  profilePicture={profile}
                  role="Project manager"
          username="Sophia Armstrong"
          review=""
        />
      </div>
    </div>
  );
}

export default Reviews