import React from 'react'
import {AppBar,Toolbar,Typography,Avatar,Badge,IconButton,Container} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {Home,Person,List,PhotoCamera,PlayCircleOutline,TabletMac,ExitToApp,Bookmark,Settings,Storefront} from '@mui/icons-material'

const useStyles = makeStyles((theme) =>({
     container : {
        height:  "100vh",
        position :  "sticky",
        top : 0,
        paddingTop : theme.spacing(10),
        [theme.breakpoints.up("sm")]:{
          backgrounColor : "#fff",
          color : "#555",
          border  : "1px solid #ece7e7",
     }
       
   },
   item:{
     display : "flex",
     alignItems:  "center",
     marginBottom : theme.spacing(3),
     [theme.breakpoints.up("sm")]:{
          marginBottom : theme.spacing(3),
          cursor : "pointer"
     }
    },
   icon : {
        marginRight : theme.spacing(1),
       [theme.breakpoints.up("sm")] : {
          fontSize : "18px"
         }      
   },

   text : {
        fontWeight : 500,
     [theme.breakpoints.down("sm")] : {
         display:  "none"
         }  
   }

}));



const LeftBar = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>

        <div className={classes.item}>
             <Home className={classes.icon} style={{color:  "blue"}}/>
             <Typography className={classes.text}>Home</Typography>
        </div>
        <div className={classes.item}>
             <Person className={classes.icon}/>
             <Typography className={classes.text}>Friends</Typography>
        </div>
        <div className={classes.item}>
             <List className={classes.icon}/>
             <Typography className={classes.text}>List</Typography>
        </div>
        <div className={classes.item}>
             <PhotoCamera className={classes.icon}/>
             <Typography className={classes.text}>Gallery</Typography>
        </div>
        <div className={classes.item}>
             <PlayCircleOutline className={classes.icon}/>
             <Typography className={classes.text}>Video</Typography>
        </div>
        <div className={classes.item}>
             <TabletMac className={classes.icon}/>
             <Typography className={classes.text}>Apps</Typography>
        </div>
        <div className={classes.item}>
             <Bookmark className={classes.icon}/>
             <Typography className={classes.text}>Collections</Typography>
        </div>
        <div className={classes.item}>
             <Storefront className={classes.icon}/>
             <Typography className={classes.text}>Market Place</Typography>
        </div>
        <div className={classes.item}>
             <Settings className={classes.icon}/>
             <Typography className={classes.text}>Settings</Typography>
        </div>
        <div className={classes.item}>
             <ExitToApp className={classes.icon}/>
             <Typography className={classes.text}>Logout</Typography>
        </div>

        </Container>
    )
}

export default LeftBar
