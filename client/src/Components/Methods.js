import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
export default function Methods({ service }) {
  const [quantity, setquantity] = useState(1);
  const [weight, setweight] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(service, quantity, weight));
  }

  return (
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div onClick={handleShow}>
        <h1>{service.name}</h1>
        <img
          src={service.image}
          alt="oops!!"
          className="img-fluid"
          style={{ height: "200px" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100">
          <p>Weight (in Grams)</p>
          <input
            type="number"
            className="mb-3 rounded-pill"
            defaultValue={0}
            style={{ width: "100px" }}
            value={weight}
            required
            onChange={(e) => {
              setweight(e.target.value);
            }}
          ></input>
        </div>
        <div className="w-100">
          <p>No. of Items</p>
          <select
            className="rounded-pill"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(11).keys()].map((x, i) => {
              return <option value={i}>{i}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1" style={{ fontSize: "x-large" }}>
            Price: {Math.ceil((service.rate / 1000) * quantity * weight)} ₹
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn mt-1 rounded-pill" onClick={addtocart}>
            Add to Cart
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{service.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={service.image}
            className="img-fluid"
            alt="oops!"
            style={{ height: "100px", width: "100px" }}
          />
          <p>{service.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
