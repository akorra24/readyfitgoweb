import ChefIcon from "../assets/chef.svg";
const BenefitSection = () => {
  return (
    <section className="py-12 font-Satoshi">
      <div className="flex flex-col md:flex-row justify-around items-center px-20 md:px-10 lg:px-32 my-10 gap-2">
        <div className="flex items-center justify-start w-full">
          <img src={ChefIcon} alt="Chef Icon" width={120} />
          <p className="text-xl font-bold ml-5">Chef-Prepared Meals</p>
        </div>
        <div className="flex items-center justify-start w-full">
          <img src={ChefIcon} alt="Chef Icon" width={120} />
          <p className="text-xl font-bold ml-5">Personalized Coaching</p>
        </div>
        <div className="flex items-center justify-start w-full">
          <img src={ChefIcon} alt="Chef Icon" width={120} />
          <p className="text-xl font-bold ml-5">In-Store Pick-Up</p>
        </div>
        <div className="flex items-center justify-start w-full">
          <img src={ChefIcon} alt="Chef Icon" width={120} />
          <p className="text-xl font-bold ml-5">Free Delivery</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center my-10 px-5 w-full">
        <h2 className="text-4xl font-bold mb-4">
          The ReadyFitGo <span className="text-primary">Method</span>
        </h2>
        <p className="text-black text-opacity-40 md:max-w-3xl">
          At Ready Fit Go, we&apos;ve perfected the formula for healthy, convenient
          eating. With chef-prepared, macro-friendly meals, no cooking is
          required—just heat, eat, and enjoy. Whether you want delivery to your
          door or in-store pickup, our flexible options fit into any lifestyle.
          Plus, we offer personalized coaching to help you crush your fitness
          and nutrition goals. Serving all of Southern California, Ready Fit Go
          is the easiest way to eat well and stay on track!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between my-10">
        <div className="flex flex-col gap-10 px-5 md:pl-10 lg:pl-32">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center w-14 h-14 bg-secondary rounded-full">
              <p className="text-white text-3xl font-bold">1</p>
            </div>
            <p className="text-2xl font-bold">Macro-Optimized Meals</p>
            <p className="text-black text-opacity-40 md:max-w-lg">
              Every meal includes detailed macro information, helping you stay
              on track with your daily nutritional goals.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center w-14 h-14 bg-secondary rounded-full">
              <p className="text-white text-3xl font-bold">2</p>
            </div>
            <p className="text-2xl font-bold">
              Ready-to-Eat, No Cooking Needed
            </p>
            <p className="text-black text-opacity-40 md:max-w-lg">
              Our meals are fully prepared—just heat and enjoy. Skip the hassle
              of meal kits and get nutritious food delivered to your door or
              pick it up in-store, eating well has never been easier.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center w-14 h-14 bg-secondary rounded-full">
              <p className="text-white text-3xl font-bold">3</p>
            </div>
            <p className="text-2xl font-bold">Licensed Nutritional Coaching</p>
            <p className="text-black text-opacity-40 md:max-w-lg">
              Our in-store trainers provide personalized coaching tailored
              toward combining your fitness and health goals with the right meal
              choices.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center w-14 h-14 bg-secondary rounded-full">
              <p className="text-white text-3xl font-bold">4</p>
            </div>
            <p className="text-2xl font-bold">Flexible Delivery & Pickup</p>
            <p className="text-black text-opacity-40 md:max-w-lg">
              Choose in-store pickup or have fresh meals delivered right to your
              door. No waiting, no cooking—just heat, eat, and enjoy healthy
              convenience.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/benefit-section.png"
            alt="Benefits"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
