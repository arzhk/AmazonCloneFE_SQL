import React from "react";
import { Container, Row } from "react-bootstrap";
import env from "react-dotenv";
import ProductCard from "./ProductCard";

function Products() {
  const [allProducts, setAllProducts] = React.useState([]);

  const fetchAllProductsHandler = async () => {
    try {
      const response = await fetch(`${env.API_URL}`);
      const data = await response.json();
      setAllProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchAllProductsHandler();
  }, []);

  return (
    <Container className="container-smaller">
      <div id="products-main-container">
        <Row>
          {allProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Products;
