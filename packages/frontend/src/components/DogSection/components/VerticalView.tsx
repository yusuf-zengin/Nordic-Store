
export const VerticalView = (props: any) => {
    const { images } = props;

    return (
        <div className='w-full h-[900px] ss:h-[1800px] xs:h-[1800px] flex flex-col gap-2 max-w-[600px] xs:w-5/6 xs:min-w-[400px]'>
            <div className='bg-no-repeat bg-cover bg-center h-1/6 w-full' style={{ backgroundImage: `url(${images[0]})` }} />
            <div className='bg-orange-100 w-full h-1/6 flex flex-col justify-center items-center text-white '>
                <div className="text-2xl">
                    Another Dog Fact
                </div>
                <div className="text-sm tracking-wide opacity-50">
                    Lorem ipsum 1
                </div>
            </div>

            <div className='bg-no-repeat bg-cover bg-center h-1/6 w-full' style={{ backgroundImage: `url(${images[1]})` }} />
            <div className='bg-red-900 w-full h-1/6 flex flex-col justify-center items-center text-white '>
                <div className="text-2xl">
                    Another Dog Fact
                </div>
                <div className="text-sm tracking-wide opacity-50">
                    Lorem ipsum 1
                </div>
            </div>

            <div className='bg-no-repeat bg-cover bg-center h-1/6 w-full' style={{ backgroundImage: `url(${images[2]})` }} />
            <div className='bg-black w-full h-1/6 flex flex-col justify-center items-center text-white '>
                <div className="text-2xl">
                    Another Dog Fact
                </div>
                <div className="text-sm tracking-wide opacity-50">
                    Lorem ipsum 1
                </div>
            </div>
        </div>
    )
}