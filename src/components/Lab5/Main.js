import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/container";
import Card from "react-bootstrap/Card";
import List from "react-virtualized/dist/commonjs/List";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form, ListGroup } from "react-bootstrap";
import Product from "./Product";

import "./Main.css";

import ReactPaginate from "react-paginate";
import "react-virtualized/styles.css";

function Main() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));

    console.log(products);
    //setProducts(products);
  };

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  const filter = (event) => {
    console.log();

    setProducts([...products].sort(dynamicSort(event.target.value)));
  
  };

  return (
    <Container>
      <Row>
        <Col sm={2}>
          <select name="select" onChange={filter}>
            <option value="price">Price</option>
            <option value="title">Name</option>
          </select>
        </Col>

        <Col sm={10}>
          <ul className="hr">
            {console.log(products)}
            {products && 
              products.map((product) => {
                return <Product product={product}   />;
              })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
