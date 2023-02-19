
export const RectangleView = (props: any) => {
    const { images } = props;

    return (
        <div className='w-10/12 sm:w-9/12 h-[900px] flex flex-col gap-2 '>
            <div className="h-1/3 flex gap-x-2 w-full">
                <div className='h-full w-1/2' style={{ backgroundImage: `url(${images[0]})` }} />
                <div className='bg-orange-100 w-1/2 h-full flex flex-col justify-center items-center text-white '>
                    <div className="text-2xl">
                        Another Dog Fact
                    </div>
                    <div className="text-sm tracking-wide opacity-50">
                        Lorem ipsum 1
                    </div>
                </div>
            </div>
            <div className="h-1/3 flex gap-x-2 w-full">
                <div className='bg-red-100 w-1/2 h-full flex flex-col justify-center items-center text-white '>
                    <div className="text-2xl">
                        Another Dog Fact
                    </div>
                    <div className="text-sm tracking-wide opacity-50">
                        Lorem ipsum 1
                    </div>
                </div>
                <div className='h-full w-1/2' style={{ backgroundImage: `url(${images[1]})` }} />
            </div>
            <div className="h-1/3 flex gap-x-2 w-full">
                <div className='h-full w-1/2' style={{ backgroundImage: `url(${images[2]})` }} />
                <div className='bg-black w-1/2 h-full flex flex-col justify-center items-center text-white '>
                    <div className="text-2xl">
                        Another Dog Fact
                    </div>
                    <div className="text-sm tracking-wide opacity-50">
                        Lorem ipsum 1
                    </div>
                </div>
            </div>
        </div>
    )
}