import { Box } from "@mui/system";
import MainNav from "../components/MainNav";
import PageContent from "../components/PageContent";
import WorkCard from "../components/WorkCard";
import { content, Job, work } from "../resources/content";
import "../styles/MainNav.css";
import "../styles/Work.css";

const Work = () => {
  return (
    <>
      <MainNav />
      <Box className="box-sizing-work centered">
        {PageContent(content.titles.work)}
        {work.map((job: Job, ind: number) => {
          return WorkCard(job, ind);
        })}
      </Box>
    </>
  );
};

export default Work;
