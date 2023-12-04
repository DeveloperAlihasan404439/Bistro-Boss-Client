import { useState } from "react";
import SectionCover from "../../Sheard/SectionCover/SectionCover";
import shops from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './OureShop.css'
import { Helmet } from "react-helmet";
import OureShopTab from "../../companent/OureShopTab/OureShopTab";
import useMenuItems from "../../Sheard/Hooks/useMenuItems";
const OureShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const {menu} = useMenuItems()
    const offered = menu?.filter(items => items.category === "offered")
    const soups = menu?.filter(items => items.category === "soup")
    const dessert = menu?.filter(items => items.category === "dessert")
    const salads = menu?.filter(items => items.category === "salad")
    const pizza = menu?.filter(items => items.category === "pizza")
    const popular = menu?.filter(items => items.category === "popular")
    const drinks = menu?.filter(items => items.category === "drinks")
  return (
    <>
    <Helmet>
        <title>Bistro Boss | Shop</title>
    </Helmet>
      <SectionCover
        imges={shops}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      />
      <div className="w-11/12 mx-auto text-center my-5 md:my-10">
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Popular</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Offered</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OureShopTab items = {popular}/>
          </TabPanel>
          <TabPanel>
            <OureShopTab items = {soups}/>
          </TabPanel>
          <TabPanel>
            <OureShopTab items = {dessert}/>
          </TabPanel>
          <TabPanel>
            <OureShopTab items = {salads}/>
          </TabPanel>
          <TabPanel>
            <OureShopTab items = {pizza}/>
          </TabPanel>
          <TabPanel>
            <OureShopTab items = {offered}/>
          </TabPanel>
          <TabPanel>
            <OureShopTab items = {drinks}/>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default OureShop;
