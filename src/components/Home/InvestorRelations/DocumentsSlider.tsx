import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import DocumentSlideInner from "./DocumentSlideInner";
import { IInvestorRelationsTabData } from "./InvestorRelations";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box
        sx={{
          py: [2.5, 2.5, 4],
        }}
      >
        {value === index && <Box>{children}</Box>}
      </Box>
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabButtonStyles = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "22px",
  /* identical to box height, or 122% */
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  /* Linear Purple Blue Style */
  background: "linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)",
  backgroundClip: "text",
  textFillColor: "transparent",
};

export type DocumentsSliderPropsType = {
  data: IInvestorRelationsTabData;
};

const DocumentsSlider: React.FC<DocumentsSliderPropsType> = ({ data }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // *************** RENDER *************** //
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Years documents tabs"
          centered
        >
          {data.years.map((item, index) => {
            return (
              <Tab
                key={item.year}
                label={item.year}
                {...a11yProps(index)}
                sx={TabButtonStyles}
              />
            );
          })}
        </Tabs>
      </Box>
      {data.years.map((item, index) => {
        return (
          <TabPanel value={value} index={index} key={item.year}>
            <DocumentSlideInner documentItems={item.documents} />
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default DocumentsSlider;
