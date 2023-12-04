import { RiDeleteBin2Fill } from "react-icons/ri";
import useAxios from "../../Sheard/Hooks/useAxios";
import Swal from "sweetalert2";
const MyCratTable = ({ items, i,refetch }) => {
    const axiosSecure = useAxios()
  const {_id, image, name, price } = items;
  const hendelDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "Delete the crat item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/carts?id=${id}`)
            .then(res =>{
                if(res.data.deletedCount>0){
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your item has been deleted.",
                      icon: "success"
                    });
                    refetch()
                }
            })
        }
      });
  }
  return (
    <tr className="bg-base-100 border-b-2 border-black">
      <th className="w-[100px]">{i + 1}</th>
      <td className="w-[200px] text-left">
        <div className="mask mask-squircle w-16 h-10">
          <img src={image} alt="" className="w-full h-10"/>
        </div>
      </td>
      <td className="text-xl text-black w-[350px] text-left">{name}</td>
      <td className="text-xl text-black w-[200px] text-left">${price}</td>
      <th className="flex-1 text-right">
        <button onClick={()=>hendelDelete(_id)} className="mr-5 text-3xl p-2 rounded-[50%] bg-[#D1A054] text-red-600"><RiDeleteBin2Fill/></button>
      </th>
    </tr>
  );
};

export default MyCratTable;
