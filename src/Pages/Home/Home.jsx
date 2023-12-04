import { Helmet } from "react-helmet";
import Banner from "../../companent/Banner/Banner";
import Boss from "../../companent/Boss/Boss";
import Chef from "../../companent/Chef/Chef";
import FromOurMenu from "../../companent/FromOurMenu/FromOurMenu";
import Menu from "../../companent/Menu/Menu";
import Order from "../../companent/Order/Order";
import Reviews from "../../companent/Reviews/Reviews";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <div className="w-11/12 mx-auto">
        <Order />
        <Boss />
        <Menu />
        <Chef />
      </div>
      <FromOurMenu />
      <div className="w-11/12 mx-auto">
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
