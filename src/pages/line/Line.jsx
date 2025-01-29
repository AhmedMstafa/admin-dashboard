import LineChart from './LineChart';
import Header from '../../components/Header';
import { Box } from '@mui/material';

export default function Line() {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <LineChart isDashboard={false} />
    </Box>
  );
}
