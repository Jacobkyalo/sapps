import { Button, Container, Table } from "react-bootstrap";
import FooterComponent from "../components/FooterComponent";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FormContext } from "../contexts/FormContext";
import { convertGPA, capitalizeWords } from "../utils/conversion";
import { UserContext } from "../contexts/UserContext";

const Dashboard = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const { state } = useContext(FormContext);
  const { user, signOutUser } = useContext(UserContext);

  const handleLogout = async () => {
    await signOutUser;
    navigate("/login");
  };

  return (
    <Container>
      <Container>
        <div className="d-flex justify-content-between align-items-center py-3">
          <Link to="/" className="fs-3 text-primary">
            SAPPS
          </Link>
          <div className="d-flex align-items-center">
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
            <div className="d-flex flex-column align-items-center ">
              {showLogout && (
                <Button
                  className="order-2"
                  type="button"
                  variant="primary"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
              {user && (
                <img
                  className="order-1 ms-4"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                  onClick={() => setShowLogout(!showLogout)}
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="userPhoto"
                />
              )}
            </div>
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
            {state.unitScore && (
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
            )}
          </div>
        </section>
        <FooterComponent />
      </Container>
    </Container>
  );
};

export default Dashboard;
