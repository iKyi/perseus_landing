import { Box, Button, Grid, Container } from "@mui/material";
import SectionHeader from "components/Reusable/SectionHeader";
import { sectionMarginBottom } from "constants/styleConstants";
import { styled } from "@mui/system";
import ISectionHeaderStrapi from "utils/types/ISectionHeader";
import { getStrapiMedia } from "lib/theme/media";

export type IntroboxPropsType = {
  header: ISectionHeaderStrapi;
  sectionImage?: any;
};

const EarthImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  marginTop: "-100px",
  [`${theme.breakpoints.down("md")}`]: {
    marginTop: 0,
  },
}));

const Introbox: React.FC<IntroboxPropsType> = ({ header, sectionImage }) => {
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
                {...header}
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
          {sectionImage && (
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
              <EarthImage
                src={getStrapiMedia(sectionImage)}
                alt="digital earth"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Introbox;
