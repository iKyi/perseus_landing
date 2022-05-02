import { Grid } from "@mui/material";
import SectionWrapper from "components/Reusable/SectionWrapper";
import one from "assets/images/portfolio/1.png";
import two from "assets/images/portfolio/2.png";
import three from "assets/images/portfolio/3.png";
import four from "assets/images/portfolio/4.png";
import five from "assets/images/portfolio/5.png";
import six from "assets/images/portfolio/6.png";
import { sectionMarginBottom } from "constants/styleConstants";

export type PortfolioPropsType = {};

const Portfolio: React.FC<PortfolioPropsType> = () => {
  // *************** RENDER *************** //
  return (
    <SectionWrapper
      title="Portfolio"
      description="20% of the share capital of APEX TP ADVANCE Ltd owner of the trading platform APEX"
      id="portfolio"
      sx={{ mb: sectionMarginBottom }}
    >
      <Grid container spacing={[3, 3, 4.5]}>
        {[one, two, three, four, five, six].map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <img
              src={item}
              alt={`item number ${index}`}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Portfolio;
