const Indicator = (props: { index: number }) => {
    const { index } = props;
    return (
        <li className="inline-block mr-3">
            <label htmlFor={`carousel-${index}`} className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
        </li>
    )
}

const Indicators = (props: { imagesLength: number }) => {
    const { imagesLength } = props;
    console.log(imagesLength)
    const indicators = [];
    
    for (let i = 1; i <= imagesLength; i++) {
        indicators.push(<Indicator key={i} index={i} />);
    }
    
    console.log(indicators)
    return (
        <ol className="carousel-indicators">
            {indicators}
        </ol>
    );
};




export default Indicators