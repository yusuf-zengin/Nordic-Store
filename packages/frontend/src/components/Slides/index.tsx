import Loading from "../HeroSection/components/Loading";
import Indicators from "./components/Indicators";
import Slide from "./components/Slide";

export default function Slides(props: any) {
    const { images } = props;

    return (
        <div className="carousel relative container mx-auto" style={{ maxWidth: "1600px" }}>
            {images.length > 0 ?
                <div className="carousel-inner relative overflow-hidden w-full">

                    {images.map((img: {}, index: number) => {
                        return (
                            <Slide key={`${index}slide`} image={img} index={index} imagesLength={images.length}/>
                        )
                    })}

                    <Indicators />

                </div> : <Loading />
            }
        </div>
    )
}
