
export const VerticalView = (props: any) => {
    const { images } = props;

    return (
        <div className='w-10/12 sm:w-9/12 h-[900px] xs:h-[300px] flex flex-col gap-2 '>
            <div className='bg-no-repeat bg-cover bg-center h-1/6 w-full' style={{ backgroundImage: `url(${images[0]})` }} />
            <div className='bg-orange-100 w-full h-1/6'></div>

            <div className='bg-no-repeat bg-cover bg-center h-1/6 w-full' style={{ backgroundImage: `url(${images[1]})` }} />
            <div className='bg-red-900 w-full h-1/6'></div>

            <div className='bg-no-repeat bg-cover bg-center h-1/6 w-full' style={{ backgroundImage: `url(${images[2]})` }} />
            <div className='bg-black w-full h-1/6'></div>
        </div>
    )
}