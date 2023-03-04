import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../assets/images/image.png";

const AboutUsComponent = () => {
  return (
    <section className="my-4">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-6">
          <h2 className="lead fw-semibold lh-base fs-2">
            We help you predict your next academic performance.
          </h2>
          <Button className="rounded-pill px-5 my-3" size="lg">
            <Link to="/signup" className="text-white fs-4">
              Try it!
            </Link>
          </Button>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <Image src={image} fluid loading="lazy" format="webp" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
