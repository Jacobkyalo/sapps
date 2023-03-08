import { Button, Container, Table } from "react-bootstrap";
import FooterComponent from "../components/FooterComponent";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";
import { convertGPA, capitalizeWords } from "../utils/conversion";

const Dashboard = () => {
  const { state } = useContext(FormContext);
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
              <Link to="/dashboard/add">
                <Button size="lg" className="my-4 p-5 w-75">
                  Add Unit
                </Button>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h3 className="fs-5 fs-semibold w-100 mb-3">
                Unit details : Semester{" "}
                <span className="lead">{state.semester}</span>
              </h3>
              <p className="lead fs-5 fw-bold lh-1">
                Marks Scored:{" "}
                <span className="lead">
                  {state.unitScore}/{state.totalMarks}
                </span>
              </p>
              <p className="lead fs-5 fw-bold lh-1">
                Percentage: <span className="lead">{state.unitScore}%</span>
              </p>
              <p className="lead fs-5 fw-bold lh-1 mb-3">
                GPA:
                <span className="lead">
                  {" "}
                  {convertGPA(state.unitScore, state.totalMarks)}
                </span>
              </p>
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
                    <td>{state.unitCode.toUpperCase()}</td>
                    <td>{capitalizeWords(state.unitName)}</td>
                    <td>{state.unitScore}</td>
                    <td>{state.totalMarks}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </section>
        <FooterComponent />
      </Container>
    </Container>
  );
};

export default Dashboard;
