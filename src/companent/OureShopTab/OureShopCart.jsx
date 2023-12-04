import useAuth from "../../Sheard/Hooks/useAuth";
import useAxios from "../../Sheard/Hooks/useAxios";
import Swal from "sweetalert2";
import useCarts from "../../Sheard/Hooks/useCarts";

const OureShopCart = ({ item }) => {
  const { user } = useAuth();
  const {refetch} = useCarts()
  const axiosSecure = useAxios()
  const email = user.email;
  const { _id,image, name, recipe, price } = item;
  const hendelAddItem = (prodact) => {
    const userItems = {
      image: prodact.image,
      name: prodact.name,
      recipe: prodact.recipe,
      price: prodact.price,
      category: prodact.category,
      email,
      categoryId: _id,
    };
    axiosSecure.post("/carts", userItems).then((res) => {
      if(res.data.insertedId){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfull added the database items",
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
      }
    });
  };
  return (
    <div className="card card-compact bg-base-200 shadow-xl border-2">
      <figure>
        <img src={image} alt="Shoes" className="w-[100%] h-[300px]" />
        <p className="absolute right-0 top-0 bg-black text-white mt-3 mr-3 px-3 py-1 text-2xl rounded-lg">
          ${price}
        </p>
      </figure>
      <div className="text-center p-5">
        <p className="text-2xl font-medium pt-1 text-black">{name}</p>
        <p className="pb-2">{recipe}</p>
        <button
          onClick={() => hendelAddItem(item)}
          className="py-2 px-5 bg-[#1F2937] w-full text-[#BB8506] rounded-lg text-xl uppercase"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default OureShopCart;
