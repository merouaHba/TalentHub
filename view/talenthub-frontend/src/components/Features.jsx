import FeatureCard from "./FeatureCard";
import design from '../assets/images/design.svg'
import ai from '../assets/images/ai.svg'
import navigation from '../assets/images/navigation.svg'
import layout from '../assets/images/layouts.svg'

const Features = () => {
    return (
      <div className=" container mx-auto px-16 pb-40">
        <div className="flex justify-center">
          <div className="text-center flex justify-center flex-col items-center">
            <h1 className="text-6xl text-main font-semibold">
              Awesome Features
            </h1>
            <p className="my-9 text-[#4D546F] text-base leading-base font-light w-4/5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          <FeatureCard
            text="Consectetur adipiscing elit donec tempus pellentesque dui."
            title="Simple Design"
            image={design}
          />
          <FeatureCard
            text="Consectetur adipiscing elit donec tempus pellentesque dui."
            title="Easy Navigation"
            image={navigation}
          />
          <FeatureCard
            text="Consectetur adipiscing elit donec tempus pellentesque dui."
            title="Resume Reviews by AI"
            image={ai}
          />
          <FeatureCard
            text="Consectetur adipiscing elit donec tempus pellentesque dui."
            title="Organized Layouts"
            image={layout}
          />
        </div>
      </div>
    );
}

export default Features