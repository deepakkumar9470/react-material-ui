import { createTheme } from '@mui/material/styles';
import { grey ,blue} from '@mui/material/colors';


export const theme = createTheme({
    palette: {
        primary: {
          main: '#341f97',
        },
        mybtn  : {
          backgroundColor :"red",
          color: "#fff",
          borderRadius:  "5px"
        }
      },
})