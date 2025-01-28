// @ts-nocheck
export const getDesingTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // light mode code here
        }
      : {
          // dark mode code here
        }),
  },
});
