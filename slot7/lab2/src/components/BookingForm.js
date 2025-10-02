import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const BookingForm = () => {
  return (
    <Container className="py-5 text-white">
      <h2 className="mb-4">Book Your Table</h2>
      <Form>
        <div className="d-flex gap-3 mb-3">
          <Form.Control type="text" placeholder="Your Name *" required />
          <Form.Control type="email" placeholder="Your Email *" required />
          <Form.Select>
            <option>Select a Service</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </Form.Select>
        </div>
        <Form.Control as="textarea" rows={4} placeholder="Please write your comment" className="mb-3" />
        <Button variant="warning">Send Message</Button>
      </Form>
    </Container>
  );
};

export default BookingForm;
