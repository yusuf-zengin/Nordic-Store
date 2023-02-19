import LoadingSpinner from "../HeroSection/components/Loading";
import { SquareView } from "./components/SquareView";
import { RectangleView } from "./components/RectangleView";
import { VerticalView } from "./components/VerticalView";

const DogSection = (props: any) => {
    const { images } = props;

    return (

        images.length > 0 ?
            <div className="w-full flex justify-center items-center ">
                <div className='w-full flex justify-center items-center hidden md:flex w-11/12 max-w-[1600px] '>
                    <SquareView images={images} />
                </div>
                <div className='w-full justify-center items-center hidden sm:flex md:hidden sm:w-full '>
                    <RectangleView images={images} />
                </div>
                <div className='w-full flex justify-center items-center sm:hidden ss:w-2/3 min-w-[300px]'>
                    <VerticalView images={images} />
                </div>
            </div>
            : <LoadingSpinner />

    )
}

export default DogSection