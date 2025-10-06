import { Box } from '@mui/system';
import PageContent from '../components/PageContent';
import WorkCard from '../components/WorkCard';
import { content, Job, jobs } from '../resources/content';
import '../styles/App.css';
import '../styles/Work.css';

const Work: React.FC = () => {
  const { work } = content;

  return (
    <Box className="box-sizing-work centered">
      <PageContent pageContent={work} />
      {jobs.map((job: Job, ind: number) => (
        <WorkCard key={ind} job={job} />
      ))}
    </Box>
  );
};

export default Work;
