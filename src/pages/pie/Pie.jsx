import PieChart from './PieChart';
import Header from '../../components/Header';
import { Box } from '@mui/material';

export default function Pie() {
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <PieChart isDashboard={false} />
    </Box>
  );
}
