import { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import { UserContext } from "../contexts/UserContext";
import ClipLoader from "react-spinners/ClipLoader";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { createUser } = useContext(UserContext);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await createUser(email, password);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

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
            <Form onSubmit={handleSignUp}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  min="6"
                  max="10"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-4">
                {loading ? (
                  <ClipLoader
                    color="#fff"
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  "Signup"
                )}
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
