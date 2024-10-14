import ArrowRight from "../assets/arrow-right.svg";

const HeroSection = () => {
  return (
    <div className="bg-background flex flex-col">
      <div className="flex flex-row justify-between items-center p-10 flex-wrap">
        <div className="flex flex-col max-w-md">
          <h1 className="text-4xl text-white">
            Open The Door for A Healthy{" "}
            <span className="text-primary">Lifestyle-</span>
          </h1>
          <p className="text-white text-opacity-40 mt-5">
            At Ready Fit Go, we offer fresh meal prep options<br /> designed to help
            you achieve your health and<br/> fitness goals—perfect for life on the
            go!
          </p>
        </div>
        <div className="flex flex-col space-y-4 mt-5 md:mt-0">
          <div className="flex flex-row space-x-4 text-white border-b-2 border-white pb-2 justify-between">
            <p>Browse Our Meals</p>
            <img src={ArrowRight} alt="Arrow Icon" />
          </div>
          <div className="flex flex-row space-x-4 text-white border-b-2 border-white pb-2 justify-between">
            <p>Calculate Your Macros</p>
            <img src={ArrowRight} alt="Arrow Icon" />
          </div>
          <div className="flex flex-row space-x-4 text-white border-b-2 border-white pb-2 justify-between">
            <p>Try Our Meal Generator</p>
            <img src={ArrowRight} alt="Arrow Icon" />
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: "url(/hero_bg.png)",
          height: "500px",
        }}
      ></div>
    </div>
  );
};

export default HeroSection;
