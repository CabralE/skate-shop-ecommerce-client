import '../../CSS/featuredProductsData.css'

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
            <div className="featuredProducts-card" >
                <img src={data.image} className="featuredProducts-card-img"/>
                <div className='featuredProducts-card-body'>
                    <h2 className="featuredProducts-card-brand">{data.brand}</h2>
                    <p className="featuredProducts-card-description">{data.descption}</p>
                    <h3 className="featuredProducts-card-price">${data.price}</h3>
                    <button className="featuredProducts-button">add to cart</button>
                </div>

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