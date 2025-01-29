import { Box, Button, Stack } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Header from '../../components/Header';

export default function Dashboard() {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Header
          isDashboard={true}
          title="DASHBOARD"
          subTitle="Welcome To Dashboard"
        />
        <Box sx={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ padding: '6px 8px', textTransform: 'capitalize', mb: 1.3 }}
          >
            <DownloadOutlinedIcon />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}
