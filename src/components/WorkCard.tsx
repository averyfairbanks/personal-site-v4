import { ThemeProvider } from "@emotion/react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  createTheme,
  Divider,
} from "@mui/material";
import "../styles/WorkCard.css";
import { Job } from "../resources/content";

export default function WorkCard(card: Job, index: number) {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={darkTheme} key={index}>
      <Card className="fix-size">
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {card.company}
            </Typography>
            <Typography variant="h4">{card.title}</Typography>
            <Typography variant="h6">{card.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider style={{ minHeight: 20 }} />
    </ThemeProvider>
  );
}
