import React, { useState, useEffect } from "react";
import { Table, Container, Col, Spinner, Button } from "react-bootstrap";
import env from "react-dotenv";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import ProductTableItem from "./ProductTableItem";
import ImageUploader from "react-images-upload";

function AdminPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [tableIsLoading, setTableIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProductInfo, setEditProductInfo] = useState({});
  const [showImageUpload, setShowImageUpload] = React.useState(false);
  const [uploadImage, setUploadImage] = useState({});

  const fetchAllProductsHandler = async () => {
    try {
      const response = await fetch(`${env.API_URL}`);
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImageHandler = async () => {
    console.log(uploadImage);
    let formData = new FormData();
    let blob = new Blob([uploadImage[0]], { type: "image/jpeg" });
    formData.append("image", blob);
    try {
      const response = await fetch(`${env.API_URL}${editProductInfo.id}/image/upload`, {
        method: "POST",
        body: formData,
      });
      setShowImageUpload(false);
    } catch (err) {
      console.log(err);
    }
  };

  const tableLoadingHandler = (state) => {
    setTableIsLoading(state);
  };

  const toggleModalHandler = () => {
    setShowEditModal(!showEditModal);
  };

  const pullEditProductInfoHandler = (product) => {
    setEditProductInfo(product);
  };

  const showImageUploaderHandler = () => {
    setShowImageUpload(!showImageUpload);
  };

  const imageUploadHandler = (picture) => {
    setUploadImage(picture);
  };

  useEffect(() => {
    fetchAllProductsHandler();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <AddProduct fetchAllProductsHandler={fetchAllProductsHandler} />

        <Col xs={12}>
          <div className="mt-3">
            {showImageUpload && (
              <div className="image-upload-container">
                <div className="image-upload-container-content swing-in-top-fwd">
                  <h4>Upload Image</h4>
                  <ImageUploader
                    withIcon={true}
                    buttonText="Choose images"
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    withPreview={true}
                    onChange={imageUploadHandler}
                  />
                  <div>
                    <Button variant="secondary" className="mr-2 rounded-pill" onClick={showImageUploaderHandler}>
                      Cancel
                    </Button>
                    <Button variant="success" className="rounded-pill" onClick={uploadImageHandler}>
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>ID</th>
                  <th>Price</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              {tableIsLoading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <tbody>
                  {allProducts.length > 0 &&
                    allProducts.map((product, index) => (
                      <ProductTableItem
                        key={index}
                        index={index}
                        product={product}
                        fetchAllProductsHandler={fetchAllProductsHandler}
                        tableLoadingHandler={tableLoadingHandler}
                        toggleModalHandler={toggleModalHandler}
                        pullEditProductInfoHandler={pullEditProductInfoHandler}
                        showImageUploaderHandler={showImageUploaderHandler}
                      />
                    ))}
                </tbody>
              )}
            </Table>
          </div>
        </Col>
      </Container>
      {showEditModal && (
        <EditProduct
          toggleModalHandler={toggleModalHandler}
          editProductInfo={editProductInfo}
          fetchAllProductsHandler={fetchAllProductsHandler}
        />
      )}
    </>
  );
}

export default AdminPage;
