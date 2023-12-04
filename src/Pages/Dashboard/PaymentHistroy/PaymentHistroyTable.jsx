import moment from 'moment'; 
moment().format(); 
const PaymentHistroyTable = ({items,i}) => {
    const {email,price,date,status} = items;
    return (
        <tr className="bg-base-100 border-b-2 border-black">
      <th className="w-[100px]">{i + 1}</th>
      <td className="text-left">
         <h1>{email}</h1>
      </td>
      <td className="text-xl text-black  text-left">{status}</td>
      <td className="text-xl text-black  text-left">{price}</td>
      <th className="flex-1 ">
        {moment(date).format('ddd, MMM YYYY')}
        </th>
    </tr>
    );
};

export default PaymentHistroyTable;