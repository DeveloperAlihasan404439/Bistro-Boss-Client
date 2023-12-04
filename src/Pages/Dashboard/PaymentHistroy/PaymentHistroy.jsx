import usePayment from "../../../Sheard/Hooks/usePayment";
import Title from "../../../Sheard/Title/Title";
import PaymentHistroyTable from "./paymentHistroyTable";

const PaymentHistroy = () => {
    const {paymentHistroy} = usePayment()
    return (
        <>
            <Title title='PAYMENT HISTORY' single='At a Glance!'/>
            <div className="w-11/12 mx-auto">
                <h1 className="text-3xl md:text-6xl font-medium ">Total Payments : {paymentHistroy?.length}</h1>
                <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="w-full bg-[#D1A054] text-white ">
                <th></th>
                <th>EMAIL</th>
                <th>CATEGORY</th>
                <th>TOTAL PRICE</th>
                <th>PAYENT DATE</th>
              </tr>
            </thead>
            <tbody>
                {
                    paymentHistroy?.map((items, i) => <PaymentHistroyTable key={i} items={items} i = {i}/>)
                }
            </tbody>
          </table>
        </div>
            </div>
        </>
    );
};

export default PaymentHistroy;