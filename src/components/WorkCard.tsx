import { ThemeProvider } from "@emotion/react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  createTheme,
  Divider,
  Avatar,
} from "@mui/material";
import "../styles/WorkCard.css";
import { Job } from "../resources/content";

export default function WorkCard(job: Job, index: number) {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={darkTheme} key={index}>
      <Card className="fix-size">
        <CardActionArea href={job.url} target="_blank">
          <CardContent>
            <Avatar src={job.logo} sx={{height: 60, width: 60}}/>
            <Divider variant="inset" sx={{borderBottomWidth: 0}} style={{ minHeight: 10 }}/>
            <Typography variant="h5" gutterBottom>
              {job.company}
            </Typography>
            <Typography variant="h4">{job.title}</Typography>
            <Typography variant="h6">{job.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider style={{ minHeight: 20 }} />
    </ThemeProvider>
  );
}
