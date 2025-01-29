import { Box, Typography, useTheme } from '@mui/material';

export default function Header({ title, subTitle, isDashboard = false }) {
  const theme = useTheme();
  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        sx={{ color: theme.palette.info.light, fontWeight: 'bold' }}
        variant="h5"
        color="initial"
      >
        {title}
      </Typography>
      <Typography variant="body1" color={theme.palette.text.primary}>
        {subTitle}
      </Typography>
    </Box>
  );
}
