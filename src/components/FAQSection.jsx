import CoffeeIcon from "../assets/Coffee.svg";
import CartIcon from "../assets/Cart.svg";
import LeafIcon from "../assets/Leaf.svg";
import BinIcon from "../assets/Bin.svg";

const FAQSection = () => {
  return (
    <div className="p-6 font-Satoshi">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <img src={CoffeeIcon} alt="Coffee Icon" className="w-12 h-12 my-2" />
          <h2 className="text-xl font-semibold mb-2">
            How Long do Meals Last?
          </h2>
          <p className="text-slate-500">
            Our meals are best stored in the refrigerator for up to 14 days
            after you receive them and in the freezer for up to 60 days.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <img src={CartIcon} alt="Cart Icon" className="w-12 h-12 my-2" />
          <h2 className="text-xl font-semibold mb-2">
            How Far do you deliver?
          </h2>
          <p className="text-slate-500">
            We cover the majority of Southern California. Our delivery range is
            from the San Fernando Valley to the Inland Empire to Southern Orange
            County.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <img src={LeafIcon} alt="Leaf Icon" className="w-12 h-12 my-2" />
          <h2 className="text-xl font-semibold mb-2">
            What days do you deliver?
          </h2>
          <p className="text-slate-500">
            Our standard delivery days are Sunday, Monday, Tuesday, and
            Wednesday of each week. Deliveries have to be made 48 hours in
            advance. For example, Friday by 8 pm for Sunday delivery.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <img src={BinIcon} alt="Bin Icon" className="w-12 h-12 my-2" />
          <h2 className="text-xl font-semibold mb-2">
            How do I heat up my meals?
          </h2>
          <p className="text-slate-500">
            Our meals are mainly heated up in the microwave. Specific heating
            times: Fish (1:45) Steak (1:45) Bison (1:30) Chicken (2:00) Tacos
            (1:15/1:30)
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
