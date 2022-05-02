import Logo from "assets/images/logo_png.png";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MenuOpenOutlined } from "@mui/icons-material";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { styled, useTheme } from "@mui/system";

export interface IHeaderLink {
  name: string;
  url: string;
}

export const NavLinks: IHeaderLink[] = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "Portofolio",
    url: "#portfolio",
  },
  {
    name: "About Us",
    url: "#about-us",
  },
  {
    name: "Investor Relations",
    url: "#investor-relations",
  },
  // {
  //   name: "Token",
  //   url: "#token",
  // },
];

export type HeaderPropsType = {};

const lateralWidthStyle = {
  width: [100, 100, 200],
  flex: [1, 1, "initial"],
};

const StyledAnchorScroll = styled(AnchorLink)(() => ({
  textDecoration: "none",
}));

const Header: React.FC<HeaderPropsType> = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const clickOffset = !mobileView ? 100 : 10;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  // *************** RENDER *************** //
  return (
    <>
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: "center",
          py: [2.5, 2.5, 4],
          px: [0.2, 0.2, 1.5],
        }}
      >
        <Box
          sx={{
            ...lateralWidthStyle,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            alt="Perseus logo"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: 160,
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: ["none", "none", "block"],
          }}
        >
          <Stack direction={"row"} justifyContent="center">
            {NavLinks.map((item) => (
              <StyledAnchorScroll
                key={item.url}
                href={item.url}
                offset={clickOffset}
              >
                <Button
                  sx={{
                    textTransform: "uppercase",
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: ["0.85rem", "0.85rem", "0.9rem"],
                    "&:hover": {
                      background:
                        "linear-gradient(103.91deg, #8F3CDD 21.01%, rgba(48, 129, 237, 0.8) 100%)",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </StyledAnchorScroll>
            ))}
          </Stack>
        </Box>
        <Box
          sx={{
            ...lateralWidthStyle,
            textAlign: "right",
          }}
        >
          <StyledAnchorScroll href="#contact" offset={clickOffset}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                fontWeight: 300,
                textTransform: "uppercase",
                fontSize: "0.85rem",
                py: [0.9, 0.9, 1.3],
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "rgba(255,255,255,0.05)",
                },
              }}
              size="large"
            >
              Contact
            </Button>
          </StyledAnchorScroll>
          <IconButton
            sx={{
              ml: 2,
              display: ["inline-flex", "inline-flex", "none"],
            }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuOpenOutlined color="inherit" fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
      <Drawer
        anchor={"right"}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <List>
          {NavLinks.map((item) => (
            <ListItem key={item.url}>
              <StyledAnchorScroll
                key={item.url}
                href={item.url}
                offset={clickOffset}
              >
                <Button
                  onClick={() => {
                    navigate(item.url);
                    setMobileOpen(false);
                  }}
                  sx={{
                    textTransform: "uppercase",
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: ["0.85rem", "0.85rem", "0.9rem"],
                    "&:hover": {
                      background:
                        "linear-gradient(103.91deg, #8F3CDD 21.01%, rgba(48, 129, 237, 0.8) 100%)",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </StyledAnchorScroll>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
