import { Box, Card, Divider, Typography } from "@mui/material";
import "../styles/PageContent.css";
import "../styles/App.css";
import { PageContent as PageContentType } from "../resources/content";

interface PageContentProps {
  pageContent: PageContentType;
}

const PageContent: React.FC<PageContentProps> = ({ pageContent }) => {
  const { title, body } = pageContent;

  const boxStyle = {
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
      <Card className="card-style">
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
