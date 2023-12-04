import Title from "../../Sheard/Title/Title";
import MenuCrat from "../../Sheard/MenuCrat/MenuCrat";
import useMenuItems from "../../Sheard/Hooks/useMenuItems";
const Menu = () => {
    const {menu} = useMenuItems()
    const popular = menu?.filter(items => items.category === "popular")
    return (
        <div>
            <Title title="FROM OUR MENU" single="Check it out"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                {
                    popular?.map(item => <MenuCrat key={item._id} item={item}/>)
                }
            </div>
            <div className="text-center mt-5 md:mt-10">
                <button className="text-xl font-medium border-b-2 rounded-lg bg-base-200 p-3">View Full  Menu</button>
            </div>
            <div className="md:py-10 py-14 rounded-lg bg-black mt-5 md:mt-10">
                <h1 className="text-center text-white font-medium text-2xl">Call Us: +88 0192345678910</h1>
            </div>
        </div>
    );
};

export default Menu;