import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { themeSettings } from './theme';

function App() {
    const theme = useMemo(() => createTheme(themeSettings), []);
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
              <CssBaseline />
              Hi
            </ThemeProvider>
        </div>
    );
}

export default App;
