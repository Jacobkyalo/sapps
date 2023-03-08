import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../contexts/FormContext";

function AddUnitModal() {
  const { state, handleChange } = useContext(FormContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first", state);
    navigate("/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="border p-4" style={{ width: "350px" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="fs-3 fw-bold">Unit details</h1>
          <Link to="/dashboard">
            <Button variant="danger" size="sm">
              Cancel
            </Button>
          </Link>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="semester">
            <Form.Label>Semester</Form.Label>
            <Form.Control
              type="text"
              name="semester"
              value={state.semester}
              onChange={handleChange}
              placeholder="Enter semester"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="unitcode">
            <Form.Label>Unit Code</Form.Label>
            <Form.Control
              type="text"
              name="unitCode"
              value={state.unitCode}
              onChange={handleChange}
              placeholder="Unit Code"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="unitname">
            <Form.Label>Unit Name</Form.Label>
            <Form.Control
              type="text"
              name="unitName"
              value={state.unitName}
              onChange={handleChange}
              placeholder="Unit Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="unitscore">
            <Form.Label>Unit Score</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="100"
              name="unitScore"
              value={state.unitScore}
              onChange={handleChange}
              placeholder="Unit Score"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="totalmarks">
            <Form.Label>Total Marks</Form.Label>
            <Form.Control
              type="number"
              min="100"
              max="100"
              value={state.totalMarks}
              onChange={handleChange}
              // placeholder="100"
              name="totalMarks"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Unit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddUnitModal;
