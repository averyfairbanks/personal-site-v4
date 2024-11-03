import { Box, Card, Divider, Typography } from "@mui/material";
import "../styles/PageContent.css";

export default function PageContent(title: string, body?: string) {
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
    <Box sx={boxStyle} className="box-sizing paper-sizing">
      <Typography variant="h1" className="title">
        {title}
      </Typography>
      <Card className="bg">
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
}
