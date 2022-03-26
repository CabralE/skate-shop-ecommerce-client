import "../App.css";
import Carousel from "../Components/Carousel";
import { SliderData } from "../Components/SliderData";
import FeaturedProductsTest from "../Components/FeaturedProducts/FeaturedProductsTest";

function Index(props) {
  const productInformation = props.productInformation;

  return (
    <>
      <Carousel slides={SliderData} />
      <FeaturedProductsTest productInformation={productInformation} />
    </>
  );
}

export default Index;
