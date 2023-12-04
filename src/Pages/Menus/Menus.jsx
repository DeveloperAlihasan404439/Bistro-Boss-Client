import Helmet from 'react-helmet'
import SectionCover from '../../Sheard/SectionCover/SectionCover';
import Title from '../../Sheard/Title/Title';
import MenuCrat from '../../Sheard/MenuCrat/MenuCrat';
import banner from '../../assets/menu/banner3.jpg'
import chif from '../../assets/home/chef-service.jpg'
import useMenuItems from '../../Sheard/Hooks/useMenuItems';
import { useState } from 'react';
const Menus = () => {
    const [hendelSoups, setHendelSoups] = useState(false)
    const [hendelDessert, setHendelDessert] = useState(false)
    const [hendelSalads, setHendelSalads] = useState(false)
    const [hendelPizza, setHendelPizza] = useState(false)
    const [hendelOffered, setHendelOffered] = useState(false)
    const {menu} = useMenuItems()
    const offered = menu?.filter(items => items.category === "offered")
    const soups = menu?.filter(items => items.category === "soup")
    const dessert = menu?.filter(items => items.category === "dessert")
    const salads = menu?.filter(items => items.category === "salad")
    const pizza = menu?.filter(items => items.category === "pizza")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <SectionCover imges={banner} title='OUR MENU' subTitle='Would you like to try a dish?'/>
            <Title title= "TODAY'S OFFER" single='Do not miss'/>
            <div className="w-11/12 md:pb-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {
                    hendelOffered?offered?.map(item => <MenuCrat key={item._id} item={item}/>)
                    :
                    soups?.slice(0,6).map(item => <MenuCrat key={item._id} item={item}/>)
                }
            </div>
            <div className="text-center my-5 md:my-10">
                <button onClick={()=>setHendelOffered(!hendelOffered)} className="text-xl font-medium border-b-2 border-black rounded-lg hover:bg-base-200 p-3 uppercase">Show All</button>
            </div>
            <SectionCover imges={chif} title='DESSERTS' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
            <div className="w-11/12 md:py-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {
                    hendelDessert?dessert?.map(item => <MenuCrat key={item._id} item={item}/>)
                    :
                    dessert?.slice(0,4).map(item => <MenuCrat key={item._id} item={item}/>)
                }
            </div>
            <div className="text-center my-5 md:my-10">
                <button onClick={()=>setHendelDessert(!hendelDessert)} className="text-xl font-medium border-b-2 border-black rounded-lg hover:bg-base-200 p-3 uppercase">Show All</button>
            </div>
            <SectionCover imges={chif} title='salads' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
            <div className="w-11/12 md:py-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                {
                    hendelSalads?salads?.map(item => <MenuCrat key={item._id} item={item}/>)
                    :
                    salads?.slice(0,6).map(item => <MenuCrat key={item._id} item={item}/>)
                }
            </div>
            <div className="text-center my-5 md:my-10">
                <button onClick={()=>setHendelSalads(!hendelSalads)} className="text-xl font-medium border-b-2 border-black rounded-lg hover:bg-base-200 p-3 uppercase">Show All</button>
            </div>
            <SectionCover imges={chif} title='pizza' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
            <div className="w-11/12 md:py-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                {
                    hendelPizza?pizza?.map(item => <MenuCrat key={item._id} item={item}/>)
                    :
                    pizza?.slice(0,4).map(item => <MenuCrat key={item._id} item={item}/>)
                }
            </div>
            <div className="text-center my-5 md:my-10">
                <button onClick={()=>setHendelPizza(!hendelPizza)} className="text-xl font-medium border-b-2 border-black rounded-lg hover:bg-base-200 p-3 uppercase">Show All</button>
            </div>
            <SectionCover imges={chif} title='soups' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
            <div className="w-11/12 md:py-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                {
                    hendelSoups?soups?.map(item => <MenuCrat key={item._id} item={item}/>)
                    :
                    soups?.slice(0,4).map(item => <MenuCrat key={item._id} item={item}/>)
                }
            </div>
            <div className="text-center my-5 md:my-10">
                <button onClick={()=>setHendelSoups(!hendelSoups)} className="text-xl font-medium border-b-2 border-black rounded-lg hover:bg-base-200 p-3 uppercase">Show All</button>
            </div>
        </div>
    );
};

export default Menus;