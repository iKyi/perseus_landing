import leftImage from "assets/images/aboutBox/leftImage.png";
import { Box, Grid, Stack } from "@mui/material";
import SectionHeader from "components/Reusable/SectionHeader";
import { sectionMarginBottom } from "constants/styleConstants";
import { mockAboutUsItems } from "mockData/mockAboutUs";
import { FONTS } from "lib/theme/index";

export type IAboutEntry = {
  name: string;
  icon: any;
};

export type AboutUsBoxPropsType = {};

const AboutUsBox: React.FC<AboutUsBoxPropsType> = () => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        mb: sectionMarginBottom,
      }}
      id="about-us"
    >
      <Grid container rowSpacing={[3, 3, 0]} columnSpacing={[2, 2, 4]}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              py: [2, 2, 4],
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={leftImage}
              alt="laptop graphic"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <SectionHeader
            title="About us"
            preTitle="PERSEUS"
            description={`Nulla mollis tempor accumsan. Aliquam rhoncus purus vitae urna varius, non varius nisi tempor. Donec a mauris arcu. In in placerat felis. Integer ut ex sed felis bibendum`}
            sx={{
              textAlign: "left",
            }}
          />
          <Stack spacing={2.5}>
            {mockAboutUsItems.map((item) => {
              return (
                <Box
                  key={item.name}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      border: "1px solid",
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(168.82deg, #FB37FF 1.7%, rgba(155, 111, 238, 0) 27.12%, rgba(123, 127, 234, 0) 61.28%, #1BB2DE 99.52%)",
                      width: "75px",
                      height: "70px",
                      fontSize: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon color="inherit" fontSize="inherit" />
                  </Box>
                  <Box sx={{ fontSize: FONTS.POPPINS, ml: 2, fontWeight: 300 }}>
                    {item.name}
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsBox;
