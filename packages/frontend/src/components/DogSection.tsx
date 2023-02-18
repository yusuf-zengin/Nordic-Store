import { dogImages } from "../images"


const DogSection = (props: any) => {
    const { images } = props;

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-3/5 h-[600px] flex gap-2'>
                <div className='w-2/3 h-full flex flex-col gap-2'>
                    <div className='h-2/3 w-full flex flex-row gap-2'>
                        <img className='bg-no-repeat h-full w-1/2' src={`${images[0]}`} alt="" />
                        <div className='h-full w-1/2 flex flex-col gap-2'>
                            <img className='bg-no-repeat h-1/2' src={`${images[1]}`} alt="" />
                            <div className='bg-orange-100 h-1/2'></div>
                        </div>
                    </div>
                    <div className='h-1/3 w-full bg-black'></div>
                </div>
                <div className='w-1/3 h-full gap-2 flex flex-col'>
                    <div className='w-full bg-black h-1/3'></div>
                    <img className='bg-no-repeat w-full h-2/3' src={`${images[2]}`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DogSection