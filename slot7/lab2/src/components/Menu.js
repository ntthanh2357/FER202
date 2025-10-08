import React from "react";
import { Card, Button, Container, Row, Col, Badge } from "react-bootstrap";

const menu = [
  { id: 1, name: "Margherita Pizza", price: 40, discount: 24, img: "/4.jpg", tag: "SALE" },
  { id: 2, name: "Mushroom Pizza", price: 25, img: "/5.jpg" },
  { id: 3, name: "Hawaiian Pizza", price: 30, img: "/6.jpg", tag: "NEW" },
  { id: 4, name: "Pesto Pizza", price: 50, discount: 16, img: "/7.jpg", tag: "SALE" }
];

const Menu = () => {
  return (
    <Container className="py-5 text-white">
      <h2 className="mb-4">Our Menu</h2>
      <Row>
        {menu.map(item => (
          <Col key={item.id} md={3}>
            <Card className="mb-4">
              <div className="position-relative">
                {item.tag && (
                  <Badge bg="warning" className="position-absolute top-0 start-0 m-2">{item.tag}</Badge>
                )}
                <Card.Img variant="top" src={item.img} 
                style={{ height: "150px", objectFit: "cover" }}/>
              </div>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.discount ? (
                    <>
                      <del>${item.price}</del> <span className="text-danger">${item.discount}</span>
                    </>
                  ) : (
                    <>${item.price}</>
                  )}
                </Card.Text>
                <Button variant="dark">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
