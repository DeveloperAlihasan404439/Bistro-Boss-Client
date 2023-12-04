import { Helmet } from "react-helmet";
import Title from "../../../../Sheard/Title/Title";
import useCarts from "../../../../Sheard/Hooks/useCarts";
import MyCratTable from "../../../../companent/MyCratTable/MyCratTable";
import { Link } from "react-router-dom";
const MyCrat = () => {
  const { cart,refetch } = useCarts();

  let total = 0;
  cart.forEach(p =>{
    total+=p.price
  })
  return (
    <>
    <Helmet>
        <title>Bistro Boss | My Crat</title>
    </Helmet>
      <Title title="WANNA ADD MORE?" single="My Cart" />
      <div className="w-10/12 mx-auto pb-10">
        <div className="flex justify-between items-center pb-5 px-5">
            <h1 className="text-4xl text-black font-medium uppercase">Total orders : {cart?.length}</h1>
            <h1 className="text-4xl text-black font-medium uppercase">Total price : ${total.toFixed(2)}</h1>
            {
              cart.length>0? <Link to='/dashbord/payment'>
                <button className="text-4xl font-medium text-white rounded-lg uppercase px-4 py-2 bg-[#D1A054]">Pay</button>
              </Link>
              :<button disabled className="text-4xl font-medium text-white rounded-lg uppercase px-4 py-2 bg-[#D1A054]">Pay</button>
            }
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="w-full bg-[#D1A054] text-white ">
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th className="flex-1 flex justify-end mr-5">ACTION</th>
              </tr>
            </thead>
            <tbody>
                {
                    cart?.map((items, i) => <MyCratTable key={i} items={items} i = {i} refetch = {refetch}/>)
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCrat;
