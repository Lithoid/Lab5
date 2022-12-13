import React from "react";
import { Button, Card,ListGroup } from "react-bootstrap";

const Product = ({ product }) => {
	return (
		<li key={product.Id}>
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
						<Card.Text>
                          {product.price}$
                        </Card.Text>
                        <Card.Link href="#">Favourite</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
		</li>
	);
};

export default Product;
