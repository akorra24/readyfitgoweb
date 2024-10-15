import westHollywood from "../assets/westHollywood.png";
import torrance from "../assets/torrance.png";
import hermosa from "../assets/hermosa.png";
import corona from "../assets/corona.png";
import silver from "../assets/silver.png";

export default function LocationSection() {
  return (
    <div className="font-Satoshi">
      <div className="flex flex-col items-center text-slate-400 gap-3">
        <p className="text-2xl font-semibold">Our Locations</p>
        <h2 className="text-4xl font-bold text-background mb-4">
          A World Of <span className="text-secondary">Choice</span>
        </h2>
        <p className="px-8 md:max-w-2xl text-center">
          Order online for delivery, or swing by one of our five in-store
          locations for a visit! Bonus: We also offer nutrition and fitness
          coaching to help you crush your goals. We’ve got all of Southern
          California covered—call us if you have any questions!
        </p>
      </div>
      <div className="flex gap-16 flex-wrap text-background justify-center my-10">
        <div className="flex flex-col  gap-6">
          {/* column 01 image 01 */}
          <div className="flex flex-col gap-2">
            <div>
              <img src={westHollywood} alt="West Hollywood" className="w-72" />
            </div>
            <div className="flex justify-between">
              <a
                href="tel:+14243821300"
                className="font-semibold text-lg text-slate-500 underline"
              >
                (424) 382-1300
              </a>
              <a
                href="https://maps.app.goo.gl/WQ6W8fX1EFnvZ1ex7"
                target="_blank"
                className="border-2 border-background rounded-lg text-sm p-1"
              >
                View Directions
              </a>
            </div>
            <h2 className="text-2xl font-semibold">West Hollywood</h2>
          </div>

          {/* column 01 image 02 */}
          <div className="flex flex-col gap-2">
            <div>
              <img src={torrance} alt="torrance" className="w-72" />
            </div>
            <div className="flex justify-between">
              <a
                href="tel:+14243989218"
                className="font-semibold text-lg text-slate-500 underline"
              >
                (424) 398-9218
              </a>
              <a
                href="https://maps.app.goo.gl/nYhWZyYf7ZePSpPh8"
                target="_blank"
                className="border-2 border-background rounded-lg text-sm p-1"
              >
                View Directions
              </a>
            </div>
            <h2 className="text-2xl font-semibold">Torrance</h2>
          </div>
        </div>
        <div>
          {/* column 02 image 01 */}
          <div className="flex flex-col gap-2">
            <div>
              <img src={hermosa} alt="hermosa beach" className="w-96" />
            </div>
            <div className="flex justify-between">
              <a
                href="tel:+13103183188"
                className="font-semibold text-lg text-slate-500 underline"
              >
                (310) 318-3188
              </a>
              <a
                href="https://maps.app.goo.gl/pYbUqBKEYTkhWXqMA"
                target="_blank"
                className="border-2 border-background rounded-lg text-sm p-1"
              >
                View Directions
              </a>
            </div>
            <h2 className="text-2xl font-semibold">Hermosa Beach</h2>
          </div>
        </div>
        <div className="flex flex-col  gap-6">
          {/* column 03 image 01 */}
          <div className="flex flex-col gap-2">
            <div>
              <img src={corona} alt="corona" className="w-72" />
            </div>
            <div className="flex justify-between">
              <a
                href="tel:+19513643060"
                className="font-semibold text-lg text-slate-500 underline"
              >
                (951) 364-3060
              </a>
              <a
                href="https://maps.app.goo.gl/XtyKNuKC5tqZdWX87"
                target="_blank"
                className="border-2 border-background rounded-lg text-sm p-1"
              >
                View Directions
              </a>
            </div>
            <h2 className="text-2xl font-semibold">Corona</h2>
          </div>

          {/* column 03 image 02 */}
          <div className="flex flex-col gap-2">
            <div>
              <img src={silver} alt="silver lake" className="w-72" />
            </div>
            <div className="flex justify-between">
              <a
                href="tel:+13239221009"
                className="font-semibold text-lg text-slate-500 underline"
              >
                (323) 922-1009
              </a>
              <a
                href="https://maps.app.goo.gl/T2LVdbbVUDVHwffs7"
                target="_blank"
                className="border-2 border-background rounded-lg text-sm p-1"
              >
                View Directions
              </a>
            </div>
            <h2 className="text-2xl font-semibold">Silver Lake</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
