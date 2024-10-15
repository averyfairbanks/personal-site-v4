import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { Job } from "../resources/content";
import "../styles/WorkCard.css";

export default function WorkCard(job: Job, index: number) {
  return (
    <>
      <Card className="fix-size">
        <CardActionArea href={job.url} target="_blank">
          <CardContent>
            <Avatar src={job.logo} sx={{ height: 60, width: 60 }} />
            <Divider
              variant="inset"
              sx={{ borderBottomWidth: 0 }}
              style={{ minHeight: 10 }}
            />
            <Typography variant="h5" gutterBottom>
              {job.company}
            </Typography>
            <Typography variant="h4">{job.title}</Typography>
            <Typography variant="h6">{job.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider style={{ minHeight: 20 }} />
    </>
  );
}
