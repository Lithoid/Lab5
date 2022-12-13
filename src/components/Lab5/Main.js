import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/container";
import Card from "react-bootstrap/Card";
import List from "react-virtualized/dist/commonjs/List";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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


}

export default Main;
