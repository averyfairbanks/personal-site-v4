import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Brightness1Icon from '@mui/icons-material/Brightness1';
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
            <List>
              {job.description?.map((bulletText: string, ind: number) => (
                <ListItem key={ind}>
                  <ListItemIcon>
                    <Brightness1Icon />
                  </ListItemIcon>
                  <ListItemText>{bulletText}</ListItemText>
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
