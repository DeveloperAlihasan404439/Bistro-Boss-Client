import boss from '../../assets/home/chef-service.jpg'
const Boss = () => {
    return (
        <div className='md:relative md:my-10'>
            <img src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNoZWZ8ZW58MHx8MHx8fDA%3D" alt="" className='rounded-lg w-full h-[60vh]'/>
            <div className='md:absolute top-0 w-full h-full flex justify-center items-center'>
                <div className='bg-white px-4 md:w-6/12 mx-auto md:px-10 py-5 md:py-16 rounded-lg' >
                    <h1 className='text-center text-xl md:text-3xl font-normal my-2 text-black'>Bistro Boss</h1>
                    <p className='text-lg text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Boss;