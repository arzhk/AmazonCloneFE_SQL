import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import env from "react-dotenv";
import Review from "./Review";

function ProductPage(props) {
  const productID = props.match.params.id;
  const [productData, setProductData] = React.useState({});
  const [reviewData, setReviewData] = React.useState([]);
  const links = [
    "Best Sellers",
    "Deals",
    "Ducks",
    "More Ducks",
    "Quack",
    "Duck goes Quack",
    "Lifestyle Duck",
    "Celebration Duck",
    "Limited Ducks",
    "Duck Accessories",
    "Smart Ducks",
  ];

  const fetchProductData = async () => {
    try {
      const response = await fetch(`${env.API_URL}${productID}`);
      const data = await response.json();
      setProductData(data[0]);
      console.log(productData);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchReviewData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/api/reviews/product/${productID}`);
      const data = await response.json();
      setReviewData(data);
      console.log(reviewData);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(async () => {
    await fetchProductData();
    await fetchReviewData();
  }, []);

  return (
    <>
      <div id="product-page-subnav" style={{ backgroundColor: "#fff" }}>
        <ul>
          {links.map((link) => (
            <li>
              <Link>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Container>
        <div className="product-page-container d-flex align-items-start justify-content-center mt-5 pt-5">
          <div className="product-page-imagewrap">
            <div className="product-page-image" style={{ background: `url("${productData.imageurl}")` }}></div>
          </div>
          <div className="product-page-content">
            <div className="content-top mb-4">
              {productData.name === "DJ Siii Duck" && <small>most popular*</small>}
              <h2 className="mb-0">{productData.name}</h2>
              <Link to={`/product/${productData.id}`}>
                Visit the <span className="font-weight-bold">{productData.brand}</span> Store
              </Link>
              <div className="d-flex justify-content-between">
                <div className="d-flex my-2 mr-4">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="d-flex align-items-center">
                  <Link to={`/product/${productData.id}`}>0 reviews</Link>
                  <p className="mb-0 mx-2"> | </p>
                  <Link to={`/product/${productData.id}`}>32 answered questions</Link>
                </div>
              </div>
              <div className="d-flex align-items-center mt-2">
                <small className="choice-badge mr-2">
                  Amazon's <span style={{ color: "rgb(246, 153, 49)" }}>Choice</span>
                </small>
                <small style={{ marginTop: "-2px" }}>
                  for "<Link>Duck</Link>"
                </small>
              </div>
            </div>
            <div className="d-flex flex-column mb-4 content-bottom">
              <div className="d-flex">
                <p className="mb-0 mr-1" style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}>
                  Price:
                </p>
                <p
                  className=" mb-0 font-weight-bold"
                  style={{ textDecoration: "line-through", color: "rgba(0,0,0,0.6)", fontSize: 14 }}
                >
                  £{productData.price * 2}
                </p>
              </div>

              <div className="d-flex">
                <p className="mb-0 mr-1">Prime Price:</p>
                <p className="price mb-0">£{productData.price}</p>
                <small className="font-weight-bold ml-1" style={{ color: "#2191C1" }}>
                  <i className="fas fa-check" style={{ color: "rgb(250,154,30)" }}></i>prime
                </small>
                <small className="font-weight-bold ml-2" style={{ color: "rgba(0,0,0,0.7)" }}>
                  Today by 10PM
                </small>
              </div>
              <div className="d-flex mb-5">
                <small className="mb-0 mr-1">You Save:</small>
                <small className="price font-weight-normal">£{productData.price} (50%)</small>
                <small className="ml-1" style={{ color: "rgba(0,0,0,0.7)" }}>
                  as a Prime member
                </small>
              </div>
              <small>{productData.description}</small>
              <div className="d-flex align-items-center mb-4">
                <i className="fas fa-chevron-right mr-1" style={{ fontSize: 10, color: "#c60", marginTop: 1 }}></i>
                <small>
                  <Link className="d-inline-block">See more product details</Link>
                </small>
              </div>
              <small>
                <Link>Compare with similar items</Link>
              </small>
              <div className="d-flex align-items-center">
                <Link>
                  <i className="far fa-comment-alt fa-flip-horizontal mr-1" style={{ fontSize: 12 }}></i>
                  <small>Report incorrect product information</small>
                </Link>
              </div>
            </div>
            <div className="content-buttons">
              <Button
                variant="warning"
                className="d-flex btn-addtocart justify-content-between px-2 mb-2"
                style={{ width: 220 }}
              >
                <i class="fas fa-cart-plus mr-2"></i>
                <div className="mx-auto">
                  <small className="font-weight-bold">Add to Basket</small>
                </div>
              </Button>
              <Button
                variant="warning"
                className="d-flex btn-buynow justify-content-between px-2"
                style={{ width: 220 }}
              >
                <i class="fas fa-play mr-2"></i>{" "}
                <div className="mx-auto">
                  <small className="font-weight-bold">Buy Now</small>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <Row>
          <Col xs={{ span: 6, offset: 3 }} className="mt-5">
            <div id="product-reviews-container">
              <h5 className="mb-4">Top reviews</h5>
              {reviewData && reviewData.map((review, index) => <Review key={index} review={review} />)}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductPage;
