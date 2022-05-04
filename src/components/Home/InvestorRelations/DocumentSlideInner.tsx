import { IInvestorRelationsDocumentEntry } from "./InvestorRelations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  Box,
  CardActionArea,
  Link as MUILink,
  Typography,
} from "@mui/material";
import { SimCardDownloadOutlined } from "@mui/icons-material";

import "swiper/css";
import "swiper/css/navigation";
import { styled } from "@mui/system";
import { FONTS } from "lib/theme";
import { API_URL } from "constants/general_contants";

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  ".swiper-button-next": {
    right: "10px",
    background: "linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  ".swiper-button-prev": {
    left: "10px",
    background: "linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  paddingRight: "50px",
  paddingLeft: "50px",
  paddingBottom: "10px",
}));

export type DocumentSlideInnerPropsType = {
  documentItems: IInvestorRelationsDocumentEntry[];
};

const DocumentSlideInner: React.FC<DocumentSlideInnerPropsType> = ({
  documentItems,
}) => {
  // *************** RENDER ****f*********** //
  if (!documentItems || documentItems?.length === 0) {
    return (
      <Box
        sx={{
          p: 3,
          textAlign: "center",
          fontFamily: FONTS.POPPINS,
        }}
      >
        No documents available for this year.
      </Box>
    );
  }
  return (
    <StyledSwiper
      spaceBetween={45}
      navigation={true}
      modules={[Navigation]}
      slidesPerView={4}
      centerInsufficientSlides
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {documentItems?.map((doc) => {
        return (
          <SwiperSlide key={doc.attributes.name + doc.attributes.url}>
            <CardActionArea
              sx={{
                border: "1px solid",
                borderImageSlice: 1,
                borderImageSource:
                  "linear-gradient(168.82deg, #FB37FF 1.7%, rgba(155, 111, 238, 0) 27.12%, rgba(123, 127, 234, 0) 61.28%, #1BB2DE 99.52%)",
                backdropFilter: "blur(642.519px)",
              }}
              component={MUILink}
              href={`${API_URL.replace(
                "/api",
                ""
              )}${doc?.attributes?.url?.replace("/uploads", "uploads")}`}
              target="_blank"
              rel="noopener"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2.3,
                  py: 3,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "400",
                    fontFamily: FONTS.POPPINS,
                    fontSize: "0.9rem",
                  }}
                >
                  {doc.attributes.name}
                </Typography>
                <Box sx={{ fontSize: "1.8rem" }}>
                  <SimCardDownloadOutlined color="inherit" fontSize="inherit" />
                </Box>
              </Box>
            </CardActionArea>
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
};

export default DocumentSlideInner;
