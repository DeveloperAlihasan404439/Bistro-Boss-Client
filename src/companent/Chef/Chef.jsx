import Title from "../../Sheard/Title/Title";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
const Chef = () => {
  return (
    <div className="mb-10">
      <Title title="CHEF RECOMMENDS" single="Should Try" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card card-compact bg-base-200 shadow-xl border ">
          <figure>
            <img
              src="https://plus.unsplash.com/premium_photo-1669687759693-52ba5f9fa7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c291cHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Shoes"
              className="w-full h-[400px]"
            />
          </figure>
          <div className="card-body text-center">
            <h1 className="text-2xl font-medium pt-1">Caeser Salad</h1>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center">
            <button className="py-2 px-5 bg-[#E8E8E8] text-[#BB8506] rounded-lg text-xl border-b-2 border-[#BB8506] uppercase">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-200 shadow-xl border">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1547414368-ac947d00b91d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8REVTU0VSVFN8ZW58MHx8MHx8fDA%3D"
              alt="Shoes"
              className="w-full h-[400px]"
            />
          </figure>
          <div className="card-body text-center">
            <h1 className="text-2xl font-medium pt-1">Caeser DESSERTS</h1>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center">
            <button className="py-2 px-5 bg-[#1F2937] text-[#BB8506] rounded-lg text-xl uppercase">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-200 shadow-xl border">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1678443242116-8a1996b1ddad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphJTIwaW4lMjBhJTIwYm94fGVufDB8fDB8fHww"
              alt="Shoes"
              className="w-full h-[400px]"
            />
          </figure>
          <div className="card-body text-center">
            <h1 className="text-2xl font-medium pt-1">Caeser Pizz</h1>
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
