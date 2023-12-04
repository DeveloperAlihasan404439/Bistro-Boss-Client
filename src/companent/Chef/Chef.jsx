import Title from "../../Sheard/Title/Title";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
const Chef = () => {
  return (
    <div className="mb-10">
      <Title title="CHEF RECOMMENDS" single="Should Try" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card card-compact bg-base-200 shadow-xl">
          <figure>
            <img
              src={slider3}
              alt="Shoes"
              className="w-full h-[400px]"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-medium pt-1">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center">
            <button className="py-2 px-5 bg-[#E8E8E8] text-[#BB8506] rounded-lg text-xl border-b-2 border-[#BB8506] uppercase">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-200 shadow-xl">
          <figure>
            <img
              src={slider4}
              alt="Shoes"
              className="w-full h-[400px]"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-medium pt-1">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center">
            <button className="py-2 px-5 bg-[#1F2937] text-[#BB8506] rounded-lg text-xl uppercase">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-200 shadow-xl">
          <figure>
            <img
              src={slider5}
              alt="Shoes"
              className="w-full h-[400px]"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-medium pt-1">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center">
            <button className="py-2 px-5 bg-[#E8E8E8] text-[#BB8506] rounded-lg text-xl border-b-2 border-[#BB8506] uppercase">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
