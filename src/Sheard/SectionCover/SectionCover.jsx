const SectionCover = ({imges, title, subTitle}) => {
    return (
        <div className='relative'>
            <img src={imges} alt="" className=' h-[500px] w-full'/>
            <div className='absolute top-0 w-full h-full flex justify-center items-center '>
                <div className='bg-[#15151599] border-2 text-white px-4 md:w-6/12 mx-auto md:px-10 py-5 md:py-16 rounded-lg' >
                    <h1 className='text-center text-xl md:text-4xl font-normal my-2 '>{title}</h1>
                    <p className='text-lg  text-center'>{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default SectionCover;