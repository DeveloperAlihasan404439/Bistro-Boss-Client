const MenuCrat = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="md:flex justify-between gap-5 p-5 bg-base-200 rounded-xl shadow-lg border">
      <img
        src={image}
        alt=""
        className="w-full md:w-[100px] h-[100px] md:rounded-tr-[50%] md:rounded-bl-[50%] md:rounded-br-[50%]"
      />
      <div>
        <h1 className="text-xl text-black uppercase mt-3 md:mt-0">{name}</h1>
        <p>{recipe}</p>
      </div>
        <h1 className="text-yellow-600 text-xl">{price}</h1>
    </div>
  );
};

export default MenuCrat;
