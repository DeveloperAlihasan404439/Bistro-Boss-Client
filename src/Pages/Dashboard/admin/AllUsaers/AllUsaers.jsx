import useUserAdmin from "../../../../Sheard/Hooks/useUserAdmin";
import Title from "../../../../Sheard/Title/Title";
import AllUsaersTable from "./AllUsaersTable";

const AllUsaers = () => {
    const {users,refetch} = useUserAdmin()
    return (
        <div className="w-11/12 mx-auto">
            <Title title='MANAGE ALL USERS' single='How many??'/>
            <h1 className="text-4xl pb-5 px-5 text-black font-medium uppercase">Total users : {users?.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="w-full bg-[#D1A054] text-white ">
                <th></th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th className="flex-1 flex justify-end mr-5">ACTION</th>
              </tr>
            </thead>
            <tbody>
                {
                    users?.map((user, i) => <AllUsaersTable key={i} user={user} i = {i} refetch = {refetch}/>)
                }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUsaers;