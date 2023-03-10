import React from "react";

interface ThirdSectionProps {}

const ThirdSection: React.FC<ThirdSectionProps> = ({}) => {
  return (
    <div className="md:h-[110vh] h-[180vh] md:mb-0 mb-96 ">
      <h1 className="md:max-w-[45%] w-[80%] mx-auto pt-28 font-[Gazeta] text-center text-4xl font-medium text-zinc-900">
        Lorem ipsum dolor sit amet . dar Etienne{" "}
        <span className="text-[#827c29]">consectecteur</span> mollitia .
      </h1>
      {/* photos div */}
      <div className="flex md:flex-row flex-col w-full md:gap-0 gap-32 md:h-[40%] h-full  justify-center pt-10">
        <div className="md:w-[25%] w-[70%] h-full md:mx-0 mx-auto">
          <div className=" w-full h-full  ">
            <img
              src="ingredients.jpg"
              className="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
          <h1 className="text-center pt-10 text-lg text-zinc-700/90">
            Lorem, ipsum dolor.
          </h1>
        </div>
        <div className="md:w-[25%] w-[70%] h-full md:mx-0 mx-auto">
          <div className=" w-full h-full bg-[url('chef.jpg')] bg-cover bg-center ">
            <img
              src="chef.jpg"
              className="object-cover object-center w-full h-full"
              alt=""
            />
          </div>

          <h1 className="text-center pt-10 text-lg text-zinc-700/90">
            Lorem, ipsum dolor.
          </h1>
        </div>
        <div className="md:w-[25%] w-[70%] h-full md:mx-0 mx-auto">
          <div className=" w-full h-full ">
            <img
              src="pizza-oven.jpg"
              className="object-cover object-center w-full h-full"
              alt=""
            />
          </div>
          <h1 className="text-center pt-10 text-lg text-zinc-800/90">
            Lorem, ipsum dolor.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
