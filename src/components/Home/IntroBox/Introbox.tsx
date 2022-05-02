import { Box, Button, Grid, Container } from "@mui/material";
import SectionHeader from "components/Reusable/SectionHeader";
import { sectionMarginBottom } from "constants/styleConstants";
import earthImage from "assets/images/homeIntroBox/earthImage.png";
import { styled } from "@mui/system";

export type IntroboxPropsType = {};

const EarthImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  marginTop: "-100px",
  [`${theme.breakpoints.down("md")}`]: {
    marginTop: 0,
  },
}));

const Introbox: React.FC<IntroboxPropsType> = () => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        py: [3, 3, 5],
        mb: sectionMarginBottom,
      }}
      id="home"
    >
      <Container>
        <Grid container spacing={[2, 2, 6]}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <SectionHeader
                title="Invest, collect,  lorem ipsum sin dolore with us."
                description="An investment company listed on the Bucharest Stock Exchange focused on distressed situations and on high-growth business based on the new media technologies"
                sx={{
                  textAlign: "left",
                }}
              />
              <Button
                variant="outlined"
                size="large"
                color="primary"
                sx={{
                  width: 220,
                  maxWidth: "100%",
                  height: 52,
                }}
              >
                Find out more
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EarthImage src={earthImage} alt="digital earth" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Introbox;
