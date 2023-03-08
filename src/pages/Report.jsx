import { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { FormContext } from "../contexts/FormContext";
import { convertGPA, getRandomScore } from "../utils/conversion";

const Report = () => {
  const { state } = useContext(FormContext);
  const gpa = convertGPA(state.unitScore, state.totalMarks);
  const predictedScore = getRandomScore(state.unitScore, state.totalMarks);

  console.log(predictedScore);

  const data = [
    { unitCode: state.unitCode.toUpperCase(), unitScore: state.unitScore },
  ];
  const gpaData = [{ unitCode: state.unitCode.toUpperCase(), gpa: gpa }];
  const predictedScoreData = [
    { unitCode: state.unitCode.toUpperCase(), predictedScore: predictedScore },
  ];

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
                <div className="col-12 col-md-12 col-lg-4 ">
                  <div
                    className="border border-primary text-center py-2 rounded"
                    style={{ height: "25rem" }}
                  >
                    <h5 className="mb-3">Unit GPA Graph</h5>
                    <BarChart width={280} height={300} data={gpaData}>
                      <XAxis dataKey="unitCode" />
                      <YAxis />
                      <Bar dataKey="gpa" barSize={70} fill="#0d6efd" />
                    </BarChart>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 ">
                  <div
                    className="border border-primary text-center p-4 rounded"
                    style={{ height: "25rem" }}
                  >
                    <h5 className="mb-3">Score Graph</h5>
                    <BarChart width={280} height={300} data={data}>
                      <XAxis dataKey="unitCode" />
                      <YAxis />
                      <Bar dataKey="unitScore" barSize={70} fill="#0d6efd" />
                    </BarChart>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 ">
                  <div
                    className="border border-primary text-center p-4 rounded"
                    style={{ height: "25rem" }}
                  >
                    <h5 className="mb-3">Predicted Score Graph</h5>
                    <BarChart
                      width={280}
                      height={300}
                      data={predictedScoreData}
                    >
                      <XAxis dataKey="unitCode" />
                      <YAxis />
                      <Bar
                        dataKey="predictedScore"
                        barSize={70}
                        fill="#0d6efd"
                      />
                      <Tooltip />
                    </BarChart>
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
