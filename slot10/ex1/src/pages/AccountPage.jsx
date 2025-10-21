// src/pages/AccountPage.jsx
import { useState } from "react";
import { ProgressBar, Button, Form } from "react-bootstrap";

export default function AccountPage() {
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const percent = step === 1 ? 33 : step === 2 ? 67 : 100;

  return (
    <div>
      <h3>👤 Build Your Profile</h3>
      <ProgressBar now={percent} label={`${percent}%`} className="mb-4" />

      {step === 1 && (
        <Form>
          <Form.Group className="mb-3"><Form.Label>First Name</Form.Label><Form.Control required /></Form.Group>
          <Form.Group className="mb-3"><Form.Label>Last Name</Form.Label><Form.Control required /></Form.Group>
        </Form>
      )}
      {step === 2 && (
        <Form>
          <Form.Group className="mb-3"><Form.Label>Username</Form.Label><Form.Control required /></Form.Group>
          <Form.Group className="mb-3"><Form.Label>Password</Form.Label><Form.Control type="password" required /></Form.Group>
        </Form>
      )}
      {step === 3 && (
        <Form>
          <Form.Group className="mb-3"><Form.Label>City</Form.Label><Form.Control required /></Form.Group>
          <Form.Group className="mb-3"><Form.Label>Country</Form.Label><Form.Control required /></Form.Group>
        </Form>
      )}

      <div className="d-flex justify-content-between">
        <Button variant="secondary" disabled={step === 1} onClick={prev}>Previous</Button>
        {step < 3 ? (
          <Button onClick={next}>Next</Button>
        ) : (
          <Button variant="success">Finish</Button>
        )}
      </div>
    </div>
  );
}
