import useMenuItems from "../../../Sheard/Hooks/useMenuItems";
import Title from "../../../Sheard/Title/Title";
import ManageItmeTablen from "./ManageItmeTablen";

const ManageItme = () => {
    const {menu,isLoading,refetch} = useMenuItems()
    return (
        <div className="w-11/12 mx-auto">
            <Title single='Hurry Up!' title='MANAGE ALL ITEMS'/>
            <div className="w-10/12 mx-auto pb-10">
        <div className="flex justify-between items-center pb-5 px-5">
            <h1 className="text-4xl text-black font-medium uppercase">Total items :{menu?.length} </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="w-full bg-[#D1A054] text-white ">
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th className="flex-1 flex justify-end mr-5">ACTION</th>
              </tr>
            </thead>
            <tbody>
                {
                    menu?.map((items, i) => <ManageItmeTablen key={i} items={items} i = {i} refetch = {refetch}/>)
                }
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default ManageItme;