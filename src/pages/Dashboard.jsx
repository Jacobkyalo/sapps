import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { useState } from "react";
import FooterComponent from "../components/FooterComponent";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function AddUnitModal() {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Unit details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="Semester">
                <Form.Select aria-label="Semester" required>
                  <option>Semester</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="unitcode">
                <Form.Label>Unit Code</Form.Label>
                <Form.Control type="text" placeholder="Unit Code" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="unitname">
                <Form.Label>Unit Name</Form.Label>
                <Form.Control type="text" placeholder="Unit Name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="unitscore">
                <Form.Label>Unit Score</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="100"
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
                  placeholder="100"
                  value={100}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Add Unit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  return (
    <Container>
      <Container>
        <div className="d-flex justify-content-between align-items-center py-3">
          <Link to="/" className="fs-3 text-primary">
            SAPPS
          </Link>
          <div>
            <Button variant="primary" className="me-4">
              <Link to="/dashboard" className="fs-5 text-white">
                Data
              </Link>
            </Button>
            <Button variant="outline-primary">
              <Link to="/report" className="fs-5 text-dark">
                Report
              </Link>
            </Button>
          </div>
        </div>
        <section className="p-4 border my-3 rounded">
          <h1 className="fw-bold fs-3 mb-4">
            Enter your unit details to predict
          </h1>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <Button size="lg" className="my-4 p-5 w-75" onClick={handleShow}>
                Add Unit
              </Button>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h3 className="fs-4 fs-semibold w-100">
                Unit details : Semester Two
              </h3>
              <p className="lead fs-5 fw-bold lh-1">Marks Scored:</p>
              <p className="lead fs-5 fw-bold lh-1">Percentage:</p>
              <p className="lead fs-5 fw-bold lh-1 mb-3">GPA:</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Unit Code</th>
                    <th>Unit Name</th>
                    <th>Score</th>
                    <th>Total Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CCS3354</td>
                    <td>Data Mining</td>
                    <td>76</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          {show && <AddUnitModal />}
        </section>
        <FooterComponent />
      </Container>
    </Container>
  );
};

export default Dashboard;
