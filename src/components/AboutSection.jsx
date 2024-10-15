import ClientsIcon from "../assets/clients.svg";
import StarIcon from "../assets/Star.svg";
import FAQSection from "./FAQSection";

const AboutSection = () => {
  return (
    <div className="relative">
      <section className="flex flex-col md:flex-row items-center bg-background text-white">
        <div className="md:w-1/2 mb-6 md:mb-0 p-6 md:p-12 font-Satoshi">
          <h2 className="text-5xl font-bold mb-4">About Us</h2>
          <span className="block w-40 h-1 bg-primary mb-6"></span>
          <p className="text-lg opacity-30">
            &ldquo;Like so many people, I always struggled to find convenient,
            healthy meal options that fit into my busy schedule. Between my
            passion for fitness and nutrition, I realized there was a need for
            on-the-go meals that could help people stay on track with their
            personal goals without the hassle. That&rsquo;s why I founded Ready
            Fit Go. I wanted to help people who, like me, wanted to eat well but
            didn&rsquo;t have time to cook. My goal has always been about more
            than just selling food; it&rsquo;s about making a healthier
            lifestyle achievable for everyone.&rdquo;
          </p>
          <p className="text-lg mt-4 italic opacity-60">
            Hayden Meier
            <br />
            ReadyFitGo, CEO
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/about.png"
            alt="About Us"
            className="w-full h-auto shadow-lg"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className="lg:w-1/4 mb-6 md:mb-0 p-6 md:p-12 font-Satoshi">
          <h2 className="text-3xl font-bold mb-4">
            Fresh, Chef-Prepared Meals
          </h2>
          <div className="flex items-center gap-1">
            <img src={StarIcon} alt="Star Icon" />
            <img src={StarIcon} alt="Star Icon" />
            <img src={StarIcon} alt="Star Icon" />
            <img src={StarIcon} alt="Star Icon" />
            <img src={StarIcon} alt="Star Icon" />
          </div>
          <h3 className="text-2xl font-bold text-slate-500 mt-4">
            Excellent 1000+reviews
          </h3>
          <img src={ClientsIcon} alt="Clients Icon" className="mt-4" />
          <p className="text-lg opacity-60 mt-4">
            Our customers are loving their fresh, delicious meals that fit their
            health and fitness goals. Join the community and let us help you
            reach yours, too!
          </p>
        </div>
      </section>
      <div className="hidden lg:block absolute right-10 bottom-40 max-w-3xl">
        <FAQSection />
      </div>
    </div>
  );
};

export default AboutSection;
