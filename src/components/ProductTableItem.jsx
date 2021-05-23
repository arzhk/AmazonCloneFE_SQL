import React from "react";
import env from "react-dotenv";

function ProductTableItem(props) {
  const productID = props.product.id;
  const [productImage, setProductImage] = React.useState({});

  const deleteProductHandler = async () => {
    props.tableLoadingHandler(true);
    try {
      await fetch(`${env.API_URL}${productID}`, {
        method: "DELETE",
      });

      setTimeout(() => {
        props.tableLoadingHandler(false);
        props.fetchAllProductsHandler();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const loadEditHandler = () => {
    props.pullEditProductInfoHandler(props.product);
    props.toggleModalHandler();
  };

  const imageUploadProcessor = () => {
    props.pullEditProductInfoHandler(props.product);
    props.showImageUploaderHandler();
  };

  return (
    <>
      <tr>
        <td>{props.index}</td>
        <td>{props.product.name}</td>
        <td>{props.product.description}</td>
        <td>{props.product.id}</td>
        <td>£{props.product.price.toFixed(2)}</td>
        <td className="d-flex justify-content-center">
          <button className="rounded-pill btn-upload mr-2" onClick={imageUploadProcessor}>
            <i className="fas fa-images mr-2"></i>Upload Image
          </button>
          <button className="rounded-pill btn-edit mr-2" onClick={loadEditHandler}>
            <i className="fas fa-pen mr-2"></i>Edit
          </button>
          <button className="rounded-pill btn-delete" onClick={deleteProductHandler}>
            <i className="fas fa-trash mr-2"></i>Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default ProductTableItem;
