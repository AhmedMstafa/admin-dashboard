import { Paper, Stack, Typography, useTheme } from '@mui/material';
import PieChart from '../../pages/pie/PieChart';
import BarChart from '../../pages/bar/BarChart';
import GeographyChart from '../../pages/geography/GeographyCahrt';

export default function Row3() {
  const theme = useTheme();
  return (
    <Stack mt={2} direction="row" flexWrap="wrap" gap={1.5}>
      <Paper sx={{ minWidth: '300px', width: '28%', flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: '30px 30px 0 30px' }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <PieChart isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: '15px' }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ minWidth: '300px', width: '33%', flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: '30px 30px 0 30px' }}
        >
          Sales Quantity
        </Typography>
        <BarChart isDashboard={true} />
      </Paper>
      <Paper sx={{ minWidth: '300px', width: '33%', flexGrow: 1 }}>
        <GeographyChart isDashboard={true} />
      </Paper>
    </Stack>
  );
}
