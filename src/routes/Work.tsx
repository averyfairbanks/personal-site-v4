import { Box } from "@mui/system";
import MainNav from "../components/MainNav";
import PageContent from "../components/PageContent";
import WorkCard from "../components/WorkCard";
import { content, Job, work } from "../resources/content";
import "../styles/MainNav.css";
import "../styles/Work.css"

const Work = () => {
  return (
    <>
      <MainNav />
      <Box className="box-sizing">
        {PageContent(content.titles.work())}
        {work.map((val: Job, ind: number) => {
          return WorkCard(val, ind);
        })}
      </Box>
    </>
  );
};

export default Work;
