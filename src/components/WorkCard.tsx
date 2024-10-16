import CircleIcon from '@mui/icons-material/Circle';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { Job } from "../resources/content";
import "../styles/WorkCard.css";

export default function WorkCard(job: Job, index: number) {
  return (
    <>
      <Card className="fix-size">
        <CardActionArea className="bg" href={job.url} target="_blank">
          <CardContent>
            <Avatar src={job.logo} sx={{ height: 60, width: 60 }} />
            <Divider
              variant="inset"
              sx={{ borderBottomWidth: 0 }}
              style={{ minHeight: 10 }}
            />
            <Typography variant="h5" gutterBottom fontWeight={700}>
              {job.company}
            </Typography>
            <Typography variant="h4" fontWeight={700}>{job.title}</Typography>
            <List>
              {job.description?.map((bulletText: string, ind: number) => (
                <ListItem key={ind}>
                  <ListItemIcon >
                    <CircleIcon sx={{ width: 10 }} />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h5" fontWeight={700}>{bulletText}</Typography>} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider style={{ minHeight: 20 }} />
    </>
  );
}
