import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CartItem from "./CartItem";

function CartPage() {
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

  return (
    <>
      <div id="product-page-subnav" className="mb-3" style={{ backgroundColor: "#fff" }}>
        <ul>
          {links.map((link) => (
            <li>
              <Link>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Container>
        <Row>
          <Col xs={9} style={{ paddingRight: "0.25rem" }}>
            <img
              alt="£6 promo code with £50 Gift Cards"
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/Giftcard/XCM_Manual_1296240_1514575_UK_uk_clone_of_1296231_uk_giftcard_gc_q1_nca_gb_en_3593951_640x90_2X_en_GB._CB414742898_.jpg"
              style={{ marginLeft: 10 }}
            ></img>
            <div id="cart-main-container" className="mt-3">
              <div className="cart-title mb-3">
                <h4 className="mb-0">Shopping Basket</h4>
                <small>
                  <Link>Deselect all items</Link>
                </small>
                <div className="w-100 text-right " style={{ color: "rgba(0,0,0,0.5)" }}>
                  <small className="font-weight-bold">Price</small>
                </div>
              </div>
              <div class="cart-content">
                <CartItem />
                <CartItem />
                <CartItem />
              </div>
              <div className="w-100 text-right mt-2">
                <h5>
                  Subtotal (1 item): <span className="font-weight-bold">£150.00</span>
                </h5>
              </div>
            </div>
          </Col>
          <Col xs={3} style={{ paddingLeft: "0.25rem" }}>
            <div className="checkout-container">
              <h6 className="mb-1">
                Subtotal (1 item): <span className="font-weight-bold">£150.00</span>
              </h6>
              <div className="d-flex mb-2">
                <Form.Check />
                <small>This order container a gift</small>
              </div>
              <div className="content-buttons">
                <Button variant="warning" className="btn-addtocart w-100 px-2 mb-2">
                  <small>Proceed to Checkout</small>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartPage;
