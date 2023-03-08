import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <section className="my-5">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="py-4 w-100">
          <h1 className="fw-bolder fs-1 text-capitalize text-center lh-base">
            Predict your next academic performance?
          </h1>
          <p className="lead my-3 text-center fs-3">
            Sign Up and Get Started Today!
          </p>
          <div className="d-flex justify-content-center align-items-center my-2">
            <Button className="rounded-pill px-5" size="lg">
              <Link to="/signup" className="text-white fs-4">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
