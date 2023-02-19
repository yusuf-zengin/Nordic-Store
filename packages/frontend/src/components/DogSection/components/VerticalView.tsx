
export const VerticalView = (props: any) => {
    const { images } = props;

    return (
        <div className='w-10/12 h-[900px] flex flex-col gap-2 '>
            <div className="h-1/3 flex gap-x-2">
                <img className='bg-no-repeat h-full w-1/2' src={`${images[0]}`} alt="" />
                <div className='bg-orange-100 w-1/2 h-full'></div>
            </div>
            <div className="h-1/3 flex gap-x-2">
                <div className='bg-red-100 w-1/2 h-full'></div>
                <img className='bg-no-repeat h-full w-1/2' src={`${images[1]}`} alt="" />
            </div>
            <div className="h-1/3 flex gap-x-2">
                <img className='bg-no-repeat h-full w-1/2' src={`${images[2]}`} alt="" />
                <div className='bg-black w-1/2 h-full'></div>
            </div>
        </div>
    )
}