
function PortfolioItem(props) {

    const { image, title } = props.data

    if (!image && !title) {
        return
    }

    return (
        <div className="portfolio-item">
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default PortfolioItem