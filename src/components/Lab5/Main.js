import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/container";
import Card from "react-bootstrap/Card";
import List from "react-virtualized/dist/commonjs/List";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import "./Main.css";

import ReactPaginate from "react-paginate";
import "react-virtualized/styles.css";

function Main() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    let prods;
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));

    console.log(products);
    //setProducts(products);
  };

  return (
    <Container>
      <Row>
        <Col sm={2}>sm=2</Col>

        <Col sm={10}>
          <ul className="hr">
            {products &&
              products.map((product) => {
                return (
                  <li>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {product.category}
                        </Card.Subtitle>
                        <Card.Text>
                          {product.description.slice(0, 70)}
                        </Card.Text>
                        <Card.Link href="#">Favourite</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                  </li>
                );
              })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
