import { Box, Card, Divider, Typography } from "@mui/material";
import "../styles/PageContent.css";
import { PageContent } from "../resources/content";

interface PageContentProps {
  pageContent: PageContent;
}

const PageContent: React.FC<PageContentProps> = ({ pageContent }) => {
  const { title, body } = pageContent;

  const boxStyle = {
    marginTop: "0 !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 70px)",
  };

  const dividerStyle = {
    minHeight: 18,
  };

  return body ? (
    <Box sx={boxStyle} className="box-sizing">
      <Typography variant="h1" className="title">
        {title}
      </Typography>
      <Card className="bg card-style">
        <Typography variant="h5" className="body-text" fontWeight={700}>
          {body}
        </Typography>
      </Card>
    </Box>
  ) : (
    <>
      <Typography variant="h1" className="title">
        {title}
      </Typography>
      <Divider style={dividerStyle} />
    </>
  );
};

export default PageContent;
