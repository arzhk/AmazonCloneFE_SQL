import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

function CartItem() {
  return (
    <div className="d-flex justify-content-between align-items-start mb-4">
      <div className="d-flex align-items-center">
        <Form.Check />
        <div className="d-flex">
          <div
            className="mx-3"
            style={{ height: 150, width: 150, backgroundColor: "rgba(0,0,0,0.15)", borderRadius: 5 }}
          ></div>
          <div className="d-flex flex-column">
            <h5 className="mb-1 font-weight-bold">
              <Link>Product title</Link>
            </h5>
            <small className="mb-1" style={{ color: "#B12704" }}>
              Only 15 left in stock.
            </small>
            <small className="mb-1">
              Sent from: <Link>Company name</Link>
            </small>
            <small>
              Gift options not available. <Link>Learn more</Link>
            </small>
          </div>
        </div>
      </div>
      <h4 className="font-weight-bold">£50.00</h4>
    </div>
  );
}

export default CartItem;
