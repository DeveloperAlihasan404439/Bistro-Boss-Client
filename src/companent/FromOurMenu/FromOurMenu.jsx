import Title from "../../Sheard/Title/Title";
import featured from "../../assets/home/featured.jpg";
const FromOurMenu = () => {
  return (
    <div className="mb-10">
    <Title title="FROM OUR MENU" single="Check it out-" />
    <div className="md:relative">
      <div className="hidden md:block w-full">
      <img src={featured} alt="" className="md:h-[400px] w-full" />
      </div>
      <div className="md:absolute top-0 w-full h-full flex justify-center items-center md:bg-[#151515B2] py-5 md:py-0">
        <div className="w-11/12 mx-auto ">
            <div className="md:flex justify-center gap-5">
                <div className="md:w-[50%]">
                <img src={featured} alt="" className="w-full h-[250px] rounded-lg"/>
                </div>
                <div className="md:text-white md:w-[50%]">
                    <p>March 20, 2023</p>
                    <h1 className="text-xl font-medium">WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div className="mt-5 md:mt-10 w-full md:w-auto" >
                        <button className="p-3 border-b rounded-lg border-white w-full bg-black md:w-auto md:bg-none text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FromOurMenu;
