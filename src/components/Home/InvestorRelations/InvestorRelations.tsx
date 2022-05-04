import SectionWrapper from "components/Reusable/SectionWrapper";
import { axiosStrapiGetter } from "lib/axios/axiosGetter";
import { useEffect, useState } from "react";
import { sectionMarginBottom } from "constants/styleConstants";
import DocumentsSlider from "./DocumentsSlider";
import ISectionHeaderStrapi from "utils/types/ISectionHeader";

export type IInvestorRelationsDocumentEntry = {
  attributes: {
    name: string;
    url: string;
  };
  id: number;
};

export type IInvestorRelationsYearEntry = {
  // year: string;
  // documents: IInvestorRelationsDocumentEntry[];
  attributes: {
    yearText: string;
    files: {
      data: IInvestorRelationsDocumentEntry[];
    };
  };
};

export type IInvestorRelationsTabData = IInvestorRelationsYearEntry[];

export type InvestorRelationsPropsType = { header: ISectionHeaderStrapi };

const InvestorRelations: React.FC<InvestorRelationsPropsType> = ({
  header,
}) => {
  const [pageData, setPageData] = useState<IInvestorRelationsTabData | null>(
    null
  );

  useEffect(() => {
    axiosStrapiGetter("landing-document-years?populate=*").then((resp) => {
      const { data } = resp;
      setPageData(data);
    });
  }, []);

  // *************** RENDER *************** //
  if (!pageData) return null;
  return (
    <SectionWrapper
      {...header}
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
