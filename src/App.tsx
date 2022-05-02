import { Container, Fab } from "@mui/material";
import InvestorRelations from "components/Home/InvestorRelations/InvestorRelations";
import Footer from "components/Layout/Footer";
import ContactBox from "components/Reusable/ContactBox";
import Header from "components/Layout/Header";
import AboutUsBox from "components/Home/AbousUsBox/AboutUsBox";
import Portfolio from "components/Portfolio/Portfolio";
import Introbox from "components/Home/IntroBox/Introbox";
import { ArrowUpwardOutlined } from "@mui/icons-material";

const App: React.FC = () => {
  const windowScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Introbox />
      <Container>
        <Portfolio />
        <AboutUsBox />
        <InvestorRelations />
        <ContactBox />
      </Container>
      <Footer />
      <Fab
        aria-label="back to top"
        sx={{
          background:
            "linear-gradient(103.91deg, #8F3CDD 21.01%, rgba(48, 129, 237, 0.8) 100%)",
          color: "common.white",
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
        onClick={windowScrollTop}
      >
        <ArrowUpwardOutlined />
      </Fab>
    </>
  );
};

export default App;
