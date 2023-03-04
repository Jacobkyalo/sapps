import NavbarComponent from "../components/NavbarComponent";
import { Container } from "react-bootstrap";
import HeroComponent from "../components/HeroComponent";
import AboutUsComponent from "../components/AboutUsComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {
  return (
    <Container>
      <Container>
        <NavbarComponent logo="SAPPS" btn1="Sign Up" btn2="Login" />
        <HeroComponent />
        <AboutUsComponent />
        <FooterComponent />
      </Container>
    </Container>
  );
};

export default HomePage;
