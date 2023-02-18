const Slide = (props: any) => {
    const { image, index } = props;
    let prev: number;
    let next: number;
    switch (index) {
        case 0:
            prev = 3;
            next = 2;
            break;
        case 1:
            prev = 1;
            next = 3;
            break;
        case 2:
            prev = 2;
            next = 1;
            break;
        default:
            break;
    }
    console.log(index, prev, next)

    return (
        <div>
            <input className="carousel-open" type="radio" id={`carousel-${index + 1}`} name="carousel" aria-hidden="true" defaultChecked={index === 0} hidden />
            <div className="carousel-item absolute opacity-0" style={{ height: "50vh" }}>
                <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: `url(${image.urls.full})` }}>
                    <div className="container mx-auto">
                        <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                            <p className="text-black text-2xl my-4 whitespace-nowrap truncate w-[500px]">{image.description}</p>
                            <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                        </div>
                    </div>

                </div>
            </div>
            <label htmlFor={`carousel-${prev}`} className={`prev control-${index + 1} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto`}>‹</label>
            <label htmlFor={`carousel-${next}`} className={`next control-${index + 1} w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto`}>›</label>
        </div>
    )
}

export default Slide