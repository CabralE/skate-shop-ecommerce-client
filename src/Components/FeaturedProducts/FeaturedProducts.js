function FeaturedProducts(props) {
    const featureData = props.FeaturedProductsData
    console.log(featureData)
    return (
    <>
    <hr/>
    <br/>
    <section className="featuredData"> 
    {featureData.map((data, index) => {
        return (
            <div className="featuredProducts-container" >
                <button className="featuredProducts-button">add to cart</button>
                <img src={data.image} className="featuredProducts-image"/>
                <p>{data.tag}</p>
                <p>${data.price}</p>
            </div>
        )})
    }
    </section>

    <br />
    <hr />
    </>
    )
}

export default FeaturedProducts