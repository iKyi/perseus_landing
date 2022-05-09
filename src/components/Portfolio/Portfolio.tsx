import { CardActionArea, Grid } from "@mui/material";
import SectionWrapper from "components/Reusable/SectionWrapper";
import { sectionMarginBottom } from "constants/styleConstants";
import ISectionHeaderStrapi from "utils/types/ISectionHeader";
import { axiosStrapiGetter } from "lib/axios/axiosGetter";
import { useEffect, useState } from "react";
import { getStrapiMedia } from "lib/theme/media";

export type PortfolioPropsType = { header: ISectionHeaderStrapi };

const Portfolio: React.FC<PortfolioPropsType> = ({ header }) => {
  const [viewsData, setViewsdata] = useState<any>(null);

  useEffect(() => {
    axiosStrapiGetter("landing-trandingbox-views?populate=*").then((resp) => {
      setViewsdata(resp?.data.map((item: any) => item.attributes) ?? {});
    });
  }, []);
  // *************** RENDER *************** //
  if (!viewsData) return null;
  return (
    <SectionWrapper {...header} id="portfolio" sx={{ mb: sectionMarginBottom }}>
      <Grid item xs={12} sm={6} md={4}></Grid>
      <Grid container spacing={[3, 3, 4.5]} justifyContent="center">
        {viewsData.map((item: any, index: number) => {
          const { image, url } = item;
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CardActionArea href={url} target="_blank" rel="noopener">
                <img
                  src={getStrapiMedia(image)}
                  alt={`item number ${index}`}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </CardActionArea>
            </Grid>
          );
        })}
      </Grid>
    </SectionWrapper>
  );
};

export default Portfolio;
