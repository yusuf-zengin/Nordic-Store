export const SquareView = (props: any) => {
    const { images } = props;

    return (
        <div className='w-full h-[800px] flex gap-2 '>
            <div className='w-2/3 h-full flex flex-col gap-2'>
                <div className='h-2/3 w-full flex flex-row gap-2'>
                    <div className='bg-no-repeat bg-cover bg-center h-full w-1/2' style={{ backgroundImage: `url(${images[0]})` }} />
                    <div className='h-full w-1/2 flex flex-col gap-2'>
                        <div className='bg-no-repeat bg-cover bg-center h-1/2' style={{ backgroundImage: `url(${images[1]})` }} />
                        <div className='bg-orange-100 h-1/2 text-sm tracking-wide opacity-50 flex flex-col justify-center items-center'>
                            <div className="text-2xl">
                                Dogs are furry
                            </div>
                            <div className="text-sm tracking-wide opacity-50">
                                Lorem ipsum 2
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-1/3 w-full bg-black text-white flex flex-col justify-center items-center'>
                    <div className="text-2xl">
                        All About Dogs
                    </div>
                    <div className="text-sm tracking-wide opacity-50">
                        Lorem ipsum 3
                    </div>
                </div>
            </div>
            <div className='w-1/3 h-full gap-2 flex flex-col'>
                <div className='w-full bg-black h-1/3 flex flex-col justify-center items-center text-white'>
                    <div className="text-2xl">
                        Another Dog Fact
                    </div>
                    <div className="text-sm tracking-wide opacity-50">
                        Lorem ipsum 1
                    </div>
                </div>
                <div className='bg-no-repeat bg-cover bg-center w-full h-2/3' style={{ backgroundImage: `url(${images[2]})` }} />
            </div>
        </div>
    )
}

