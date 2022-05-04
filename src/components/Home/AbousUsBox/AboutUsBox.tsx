import { Box, Grid, Stack } from "@mui/material";
import SectionHeader from "components/Reusable/SectionHeader";
import { sectionMarginBottom } from "constants/styleConstants";
import { FONTS } from "lib/theme/index";
import ISectionHeaderStrapi from "utils/types/ISectionHeader";
import { getStrapiMedia } from "lib/theme/media";
import {
  Image,
  RocketLaunchOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";

const bindEntryIcons = (items: any[]) => {
  return items.map((item, index) => {
    switch (index) {
      case 0:
        item.icon = VerifiedUserOutlined;
        break;
      case 1:
        item.icon = Image;
        break;
      case 2:
        item.icon = RocketLaunchOutlined;
        break;
      default:
        break;
    }
    return item;
  });
};

export type IAboutEntry = {
  name: string;
  icon: any;
};

export type AboutUsBoxPropsType = {
  header: ISectionHeaderStrapi;
  aboutUsImage: any;
  aboutUsEntries?: any[];
};

const AboutUsBox: React.FC<AboutUsBoxPropsType> = ({
  header,
  aboutUsImage,
  aboutUsEntries,
}) => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        mb: sectionMarginBottom,
      }}
      id="about-us"
    >
      <Grid container rowSpacing={[3, 3, 0]} columnSpacing={[2, 2, 4]}>
        {aboutUsImage && (
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
                src={getStrapiMedia(aboutUsImage)}
                alt="laptop graphic"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        )}

        <Grid item xs={12} sm={12} md={6}>
          <SectionHeader
            {...header}
            sx={{
              textAlign: "left",
            }}
          />

          {aboutUsEntries ? (
            <Stack spacing={2.5}>
              {bindEntryIcons(aboutUsEntries).map((item) => {
                return (
                  <Box
                    key={item.id}
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
                    <Box
                      sx={{ fontSize: FONTS.POPPINS, ml: 2, fontWeight: 300 }}
                    >
                      {item.text}
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsBox;
