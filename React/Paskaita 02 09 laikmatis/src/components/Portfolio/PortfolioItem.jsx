
function PortfolioItem(props) {

    const { image, title } = props

    return (
        <div className="portfolio-item">
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default PortfolioItem