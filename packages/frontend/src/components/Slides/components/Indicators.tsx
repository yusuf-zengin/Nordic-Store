const Indicator = (props: { index: number }) => {
    const { index } = props;
    return (
        <li className="inline-block mr-3">
            <label htmlFor={`carousel-${index}`} className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
        </li>
    )
}


const Indicators = () => (
    <ol className="carousel-indicators">
        <Indicator index={1} />
        <Indicator index={2} />
        <Indicator index={3} />
    </ol>
)


export default Indicators