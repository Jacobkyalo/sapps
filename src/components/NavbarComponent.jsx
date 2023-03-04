import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = ({ logo, btn1, btn2 }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="fs-3 text-primary">
          {logo}
        </Link>
        <div>
          <Button variant="primary" className="me-4">
            <Link to="/signup" className="fs-5 text-white">
              {btn1}
            </Link>
          </Button>
          <Button variant="outline-primary">
            <Link to="/login" className="fs-5 text-dark">
              {btn2}
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
