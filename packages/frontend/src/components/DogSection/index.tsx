import LoadingSpinner from "../HeroSection/components/Loading";
import { SquareView } from "./components/SquareView";
import { RectangleView } from "./components/RectangleView";
import { VerticalView } from "./components/VerticalView";

const DogSection = (props: any) => {
    const { images } = props;

    return (

        images.length > 0 ?
            <div className="w-full flex justify-center items-center ">
                <div className='w-full flex justify-center items-center hidden md:flex lg:w-5/6'>
                    <SquareView images={images} />
                </div>
                <div className='w-full justify-center items-center hidden xs:flex md:hidden lg:w-5/6'>
                    <RectangleView images={images} />
                </div>
                <div className='w-full flex justify-center items-center xs:hidden lg:w-5/6'>
                    <VerticalView images={images} />
                </div>
            </div>
            : <LoadingSpinner />

    )
}

export default DogSection