import SectionWrapper from "components/Reusable/SectionWrapper";
import axiosGetter from "lib/axios/axiosGetter";
import { investorRelationsMockData } from "mockData/investorRelations";
import { useEffect, useState } from "react";
import { sectionMarginBottom } from "constants/styleConstants";
import DocumentsSlider from "./DocumentsSlider";

export type IInvestorRelationsDocumentEntry = {
  name: string;
  url: string;
};

export type IInvestorRelationsYearEntry = {
  year: string;
  documents: IInvestorRelationsDocumentEntry[];
};

export type IInvestorRelationsTabData = {
  years: IInvestorRelationsYearEntry[];
};

export type InvestorRelationsPropsType = {};

const InvestorRelations: React.FC<InvestorRelationsPropsType> = () => {
  const [pageData, setPageData] = useState<IInvestorRelationsTabData | null>(
    null
  );

  useEffect(() => {
    axiosGetter("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      setPageData(investorRelationsMockData);
    });
  }, []);

  // *************** RENDER *************** //
  if (!pageData) return null;
  return (
    <SectionWrapper
      title="Investor relations"
      description="You find here the financials for the last 5 years"
      sx={{
        mb: sectionMarginBottom,
      }}
      id="investor-relations"
    >
      <DocumentsSlider data={pageData} />
    </SectionWrapper>
  );
};

export default InvestorRelations;
