import GeographyChart from './GeographyCahrt';
import Header from '../../components/Header';
import { Box } from '@mui/material';

export default function Geography() {
  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />
      <GeographyChart isDashboard={false} />
    </Box>
  );
}
