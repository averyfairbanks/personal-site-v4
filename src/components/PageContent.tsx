import { Box, createTheme, Divider, Paper, ThemeProvider } from "@mui/material";
import "../styles/PageContent.css";

export default function PageContent(title: string, body?: string) {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

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

  if (body) {
    return (
      <ThemeProvider theme={darkTheme}>
        <Box sx={boxStyle} className="box-sizing">
          <div className="title">{title}</div>
          <Paper elevation={3} className="paper-sizing">
            <div className="body-text">{body}</div>
          </Paper>
        </Box>
      </ThemeProvider>
    );
  } else {
    return (
      <>
        <div className="title">{title}</div>
        <Divider style={dividerStyle} />
      </>
    );
  }
}
