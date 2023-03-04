import { Container, Form, Button } from "react-bootstrap";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

const SignUpPage = () => {
  return (
    <Container>
      <Container>
        <NavbarComponent logo="SAPPS" btn1="Sign Up" btn2="Login" />

        <section className="my-5">
          <div
            style={{ height: "100%", width: "350px", margin: "auto" }}
            className="border p-4"
          >
            <h2 className="fw-semibold fs-4 mb-4">Signup to continue.</h2>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-4">
                Signup
              </Button>
            </Form>
          </div>
        </section>
        <FooterComponent />
      </Container>
    </Container>
  );
};

export default SignUpPage;
