import { Box, createTheme, Divider, Paper, ThemeProvider } from "@mui/material";
import "../styles/PageContent.css";

export default function PageContent(title: string, body?: string) {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  const paperStyle = {
    minHeight: 300,
    maxWidth: "80vw",
    minWidth: "70vw",
    margin: "0 20px",
  };

  const dividerStyle = {
    minHeight: 20,
  };

  if (body) {
    return (
      <ThemeProvider theme={darkTheme}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <div className="title">{title}</div>
          <Divider style={dividerStyle} />
          <Paper elevation={3} style={paperStyle}>
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
