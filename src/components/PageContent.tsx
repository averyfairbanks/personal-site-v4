import { Box, createTheme, Divider, Paper, ThemeProvider } from "@mui/material";
import "../styles/PageContent.css";

export default function PageContent(title: string, body: string) {
  const lightTheme = createTheme({ palette: { mode: "light" } });

  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="title">{title}</div>
        <Divider style={{ minHeight: 20 }} />
        <Paper
          variant="outlined"
          elevation={0}
          style={{
            minHeight: "fit-content",
            minWidth: "80vw",
          }}
        >
          <div className="body-text">{body}</div>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
