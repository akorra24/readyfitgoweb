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
        <h2 className="text-4xl font-bold mb-4">The ReadyFitGo <span className="text-primary">Method</span></h2>
        <p className="text-black text-opacity-60 md:max-w-3xl">
          At Ready Fit Go, we’ve perfected the formula for healthy, convenient
          eating. With chef-prepared, macro-friendly meals, no cooking is
          required—just heat, eat, and enjoy. Whether you want delivery to your
          door or in-store pickup, our flexible options fit into any lifestyle.
          Plus, we offer personalized coaching to help you crush your fitness
          and nutrition goals. Serving all of Southern California, Ready Fit Go
          is the easiest way to eat well and stay on track!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <ul className="flex-1 mb-8 md:mb-0 md:mr-8">
          <li className="mb-4">Benefit Detail 1</li>
          <li className="mb-4">Benefit Detail 2</li>
          <li className="mb-4">Benefit Detail 3</li>
          <li className="mb-4">Benefit Detail 4</li>
        </ul>
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
