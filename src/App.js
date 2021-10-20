import './App.css';
import Navbar from './components/Navbar/Navbar'
import {Typography,Grid,Container} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {UploadFile} from '@mui/icons-material'
import LeftBar from './components/LeftBar/LeftBar'
import RightBar from './components/RightBar/RightBar'
import Feed from './components/Feed/Feed'

const useStyles = makeStyles((theme)=>({
  toolBar : {
     
  },
  rightBar : {
    [theme.breakpoints.down("sm")] : {
      display  : "none"
     }
  },
  
}))

function App() {

  const classes = useStyles()

  return (
    <div className="App">
                 <Navbar/>
               <Grid container>

                 <Grid item sm={2}>
                   <LeftBar/>
                  </Grid>

                  <Grid item sm={7}>
                   <Feed/>
                  </Grid>

                 <Grid item sm={3} className={classes.rightBar}>
                   <RightBar/>
                  </Grid>
                
                </Grid>
        
    </div>
  );
}

export default App;
