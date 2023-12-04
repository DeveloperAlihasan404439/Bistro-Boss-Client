import OureShopCart from "./OureShopCart";

const OureShopTab = ({items}) => {
    return (
        <div className="w-11/12 md:pb-10 mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 items-center">
        {
                items?.map(item => <OureShopCart key={item._id} item={item}/>)
            }
        </div>
    );
};

export default OureShopTab;