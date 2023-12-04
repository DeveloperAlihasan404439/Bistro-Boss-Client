import { useForm } from "react-hook-form";
import Title from "../../../Sheard/Title/Title";
import useAxiosPublick from '../../../Sheard/Hooks/useAxiosPublick'
import useAxios from '../../../Sheard/Hooks/useAxios'
import Swal from 'sweetalert2'
const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;

const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`

const AddItem = () => {
  const axiosPublick = useAxiosPublick()
  const axiosSecure = useAxios()

  const { register, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    // host the images code in imgbb 
    const fromImages = {image: data.image[0]}
    const res = await axiosPublick.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",
      }
    })
    if(res.data.success){
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      }
      const menu = await axiosSecure.post('/menu', menuItem)
      if(menu.data.insertedId){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${data.name} added the menu items`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <Title title="ADD AN ITEM" single="What's new?" />
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
                className="input input-bordered w-full"
              >
                <option>select a category</option>
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
            ></textarea>
          </div>
          <div className="form-control ">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
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

export default AddItem;
