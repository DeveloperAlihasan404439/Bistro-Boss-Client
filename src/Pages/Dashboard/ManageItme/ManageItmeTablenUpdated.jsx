import Title from "../../../Sheard/Title/Title";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxios from "../../../Sheard/Hooks/useAxios";
import Swal from "sweetalert2";
const ManageItmeTablenUpdated = () => {
  const menu = useLoaderData();
  const axiosSecure = useAxios();

  const { _id, category, name, price, recipe } = menu;
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const updated = {
      category: data.category,
      name: data.name,
      price: parseFloat(data.price),
      recipe: data.recipe,
    };
    axiosSecure.put(`/menu/updated?id=${_id}`, updated, {withCredentials: true}).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} updated the menu items`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto">
      <Title title="UPDATE ITEM" single="What's new?" />
      <div className="card shrink-0 w-full max-w-2xl mx-auto shadow-2xl bg-[#F3F3F3]">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-black">
                Recipe name<sup className="text-red-500">*</sup>
              </span>
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="recipe name"
              defaultValue={name}
              className="input input-bordered"
            />
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">
                  Category<sup className="text-red-500">*</sup>
                </span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue={category}
                className="input input-bordered w-full"
              >
                <option value="salad">Salad</option>
                <option value="drinks">Drinks</option>
                <option value="popular">Popular</option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="offered">Offered</option>
              </select>
            </div>
            <div className="form-control md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">
                  Price<sup className="text-red-500">*</sup>
                </span>
              </label>
              <input
                {...register("price", { required: true })}
                className="input input-bordered w-full"
                defaultValue={price}
                placeholder="price"
              />
            </div>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl text-black">
                Recipe Details<sup className="text-red-500">*</sup>
              </span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              id=""
              cols="15"
              rows="5"
              className="input input-bordered w-full h-full"
              placeholder="details"
              defaultValue={recipe}
            ></textarea>
          </div>
          <input
            type="submit"
            className="btn bg-[#1F2937] hover:bg-[#1F2937] text-white mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default ManageItmeTablenUpdated;
