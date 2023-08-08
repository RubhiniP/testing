import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Muimode = () => {
    const theme = useTheme();

    return(
        <Typography component="h2">
            {`${theme.palette.mode} mode`}
        </Typography>
    );
}

export default Muimode;

