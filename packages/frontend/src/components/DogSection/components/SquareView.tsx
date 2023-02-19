export const SquareView = (props: any) => {
    const { images } = props;

    return (
        <div className='w-10/12  xl:w-4/6 h-[800px] flex gap-2 '>
            <div className='w-2/3 h-full flex flex-col gap-2'>
                <div className='h-2/3 w-full flex flex-row gap-2'>
                    <div className='bg-no-repeat bg-cover bg-center h-full w-1/2' style={{ backgroundImage: `url(${images[0]})` }} />
                    <div className='h-full w-1/2 flex flex-col gap-2'>
                        <div className='bg-no-repeat bg-cover bg-center h-1/2' style={{ backgroundImage: `url(${images[1]})` }} />
                        <div className='bg-orange-100 h-1/2'></div>
                    </div>
                </div>
                <div className='h-1/3 w-full bg-black'></div>
            </div>
            <div className='w-1/3 h-full gap-2 flex flex-col'>
                <div className='w-full bg-black h-1/3'></div>
                <div className='bg-no-repeat bg-cover bg-center w-full h-2/3' style={{ backgroundImage: `url(${images[2]})` }} />
            </div>
        </div>
    )
}

