import { FaUsers } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxios from "../../../../Sheard/Hooks/useAxios";

const AllUsaersTable = ({ user,i,refetch }) => {
    const axiosSecure = useAxios()
    const {_id,name,email} = user;

    const hendelMackAdmin = ()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "updated the user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, updated it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin?id=${_id}`)
                .then(res =>{
                    if(res.data.modifiedCount>0){
                        Swal.fire({
                          title: "updated!",
                          text: "Your user has been updated.",
                          icon: "success"
                        });
                        refetch()
                    }
                })
            }
          });
    }

    const hendelDeleteUser = ()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Delete the user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users?id=${_id}`)
                .then(res =>{
                    if(res.data.deletedCount>0){
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your user has been deleted.",
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
      <td className="w-[250px] text-left text-xl">{name}</td>
      <td className="text-xl text-black w-[400px] text-left">{email}</td>
      <td className="text-xl text-black w-[150px] text-left">
      {
        user?.role === 'admin'? 'Admin'
        : <button
        onClick={hendelMackAdmin}
        className="mr-5 text-3xl p-2 rounded-[50%] bg-[#D1A054] text-white"
      >
        <FaUsers/>
      </button>
      }
      </td>
      <th className="flex-1 text-right">
        <button
          onClick={hendelDeleteUser}
          className="mr-5 text-3xl p-2 rounded-[50%] bg-orange-500 text-red-600"
        >
          <RiDeleteBin2Fill/>
        </button>
      </th>
    </tr>
  );
};

export default AllUsaersTable;
