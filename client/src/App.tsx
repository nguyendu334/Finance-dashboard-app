import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '@/scenes/navbar';
import { themeSettings } from './theme';

function App() {
    const theme = useMemo(() => createTheme(themeSettings), []);
    return (
        <div className="App">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
                      <Navbar />
                        <Routes>
                            <Route path="/" element={<div>Hello</div>} />
                            <Route path="/predictions" element={<div>Predictions page</div>}></Route>
                        </Routes>
                    </Box>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
