import LoadingSpinner from "../HeroSection/components/Loading";
import { SquareView } from "./components/SquareView";
import { VerticalView } from "./components/VerticalView";

const DogSection = (props: any) => {
    const { images } = props;

    return (

        images.length > 0 ?
            <div className="w-full">
                <div className='w-full flex justify-center items-center hidden ss:flex'>
                    <SquareView images={images} />
                </div>
                <div className='w-full flex justify-center items-center flex ss:hidden'>
                    <VerticalView images={images} />
                </div>
            </div>
            : <LoadingSpinner />

    )
}

export default DogSection