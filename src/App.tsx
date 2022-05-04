import { Container, Fab } from "@mui/material";
import InvestorRelations from "components/Home/InvestorRelations/InvestorRelations";
import Footer from "components/Layout/Footer";
import ContactBox from "components/Reusable/ContactBox";
import Header from "components/Layout/Header";
import AboutUsBox from "components/Home/AbousUsBox/AboutUsBox";
import Portfolio from "components/Portfolio/Portfolio";
import Introbox from "components/Home/IntroBox/Introbox";
import { ArrowUpwardOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { axiosStrapiGetter } from "lib/axios/axiosGetter";
import ISectionHeaderStrapi from "utils/types/ISectionHeader";

const App: React.FC = () => {
  const [landingData, setLandingData] = useState<any>(null);

  useEffect(() => {
    axiosStrapiGetter("landing-text-data?populate=*").then((resp) => {
      setLandingData(resp?.data?.attributes ?? {});
    });
  }, []);

  const windowScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const {
    AboutUsHeader,
    ContactHeader,
    InvestorRelationsHeader,
    introBoxHeader,
    portfolioHeader,
    introBoxImage,
    aboutUsImage,
    aboutUsEntries,
    footerText,
    socialLinks,
  } = landingData || {};

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Introbox
        header={introBoxHeader as ISectionHeaderStrapi}
        sectionImage={introBoxImage}
      />
      <Container>
        <Portfolio header={portfolioHeader as ISectionHeaderStrapi} />
        <AboutUsBox
          header={AboutUsHeader as ISectionHeaderStrapi}
          aboutUsImage={aboutUsImage}
          aboutUsEntries={aboutUsEntries}
        />
        <InvestorRelations
          header={InvestorRelationsHeader as ISectionHeaderStrapi}
        />
        <ContactBox header={ContactHeader as ISectionHeaderStrapi} />
      </Container>
      <Footer socialLinks={socialLinks} text={footerText} />
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
