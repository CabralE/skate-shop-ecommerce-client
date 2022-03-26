import { useNavigate, useParams } from "react-router-dom";

function Show(props) {
  const deconstructedProductInformation = props.deconstructedProductInformation;
  const id = props.match.params.id;

  return (
    <>
      <h1>Show Page!</h1>
    </>
  );
}

export default Show;
