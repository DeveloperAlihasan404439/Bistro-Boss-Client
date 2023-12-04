const Title = ({single, title}) => {
    return (
        <div className="md:w-4/12 mx-auto my-5 md:my-14">
            <h1 className="text-xl font-normal text-yellow-600 text-center my-2">---{single}---</h1>
            <div className="border-t-2 border-slate-400"></div>
            <h1 className="text-5xl font-medium text-black text-center pt-7 mb-2">{title}</h1>
            <div className="border-t-2 border-slate-400"></div>
        </div>
    );
};

export default Title;