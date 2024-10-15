import FacebookLogo from "../assets/Facebook.svg";
import InstagramLogo from "../assets/Instagram.svg";
import RfgLogo from "../assets/rfg 1.svg";
import TwitterLogo from "../assets/Twitter Icon.svg";
import LinkedinLogo from "../assets/Linkedin Icon.svg";

export default function FooterSection() {
  return (
    <footer>
      <div className="bg-background font-Satoshi text-white py-20 px-10 lg:px-40 flex flex-col gap-10 ">
        <div className="text-center px-5 lg:px-60 flex flex-col gap-10">
          <div className="text-4xl font-semibold">
            Fresh. Convenient. Local.
          </div>
          <div className="text-sm">
            We&apos;re passionate about making healthy living easy with fresh,
            ready-to-eat meals designed to fit your lifestyle. Our meals are
            machine-sealed with nitrogen gas to stay fresh for up to 14 days—no
            freezing needed. Whether you&apos;re ordering for delivery or
            picking up in-store, our meals are made to fuel your goals without
            the hassle. From personalized coaching to flexible meal plans,
            we&apos;re here to support your wellness journey every step of the
            way.
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center">
            <div className="bg-white justify-center py-1 px-4 rounded-full flex items-center mr-7">
              <img
                src={FacebookLogo}
                alt="Facebook Logo"
                className="w-10 h-10"
              />
              <p className="text-black">Facebook</p>
            </div>
            <div className="bg-white justify-center py-1 px-4 rounded-full flex items-center">
              <img
                src={InstagramLogo}
                alt="Instagram Logo"
                className="w-10 h-10"
              />
              <p className="text-black">Instagram</p>
            </div>
          </div>
        </div>
        <hr className="bg-white"></hr>
        <div className="flex flex-col gap-10 md:flex-row justify-between items-center">
          <img src={RfgLogo} alt="RFG Logo" className="w-36 h-36" />
          <div className="text-center">
            <p className="font-semibold">
              2013 ReadyFitGo.
              <span className="text-secondary"> Click Here </span>
              for Business Inquiries.
            </p>
          </div>

          <div className="flex gap-5">
            <img src={LinkedinLogo} alt="Linkedin Logo" className="w-10 h-10" />
            <img src={TwitterLogo} alt="Twitter Logo" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
}
