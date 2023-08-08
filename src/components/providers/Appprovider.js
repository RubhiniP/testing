import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const Appprovider = ({ children }) => {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default Appprovider;