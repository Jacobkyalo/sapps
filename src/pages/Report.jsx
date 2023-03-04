import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Report = () => {
  return (
    <>
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
          <section className="my-5">
            <div className="p-3">
              <div className="row d-flex g-4">
                <div className="col-12 col-md-4 col-lg-4 ">
                  <div
                    className="border border-primary text-center p-4 rounded"
                    style={{ height: "25rem" }}
                  >
                    graph
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 ">
                  <div
                    className="border border-primary text-center p-4 rounded"
                    style={{ height: "25rem" }}
                  >
                    score graph
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 ">
                  <div
                    className="border border-primary text-center p-4 rounded"
                    style={{ height: "25rem" }}
                  >
                    predicted score
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Container>
    </>
  );
};

export default Report;
