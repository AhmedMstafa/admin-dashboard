
import { createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import TopBar from './components/TopBar';
import { useMemo, useState } from 'react';
import SideBar from './components/SideBar';
import { ThemeProvider } from '@emotion/react';
import { getDesingTokens } from './Themes/theme';
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  const [mode, setMode] = useState(
    localStorage.getItem('currentMode') ?? 'dark'
  );

  // @ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const theme = useMemo(() => createTheme(getDesingTokens(mode)));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function setModeHandler(mode) {
    setMode(mode);
    localStorage.setItem('currentMode', mode);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <TopBar {...{ handleDrawerOpen, open, setModeHandler }} />
        <SideBar {...{ handleDrawerClose, open }} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
