import { Box, Button } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';

export default function Dashboard() {
  return (
    <div>
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

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}
