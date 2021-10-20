import React,{useState} from 'react'
import {AppBar,Toolbar,Typography,Avatar,Badge,Button, InputBase} from '@mui/material'
import {makeStyles,alpha} from '@mui/styles'
import {UploadFile,Search,Mail, NotificationAdd} from '@mui/icons-material'

const useStyles = makeStyles((theme) =>({
   toolBar : {
    display: 'flex',
    justifyContent : 'space-between'
   },
   btn : {
       ...theme.mybtn
   },
   search : {
      display: 'flex',
      width:  "50%",
      alignItems : 'center',
    //   backgroundColor :alpha(theme.palette.common.white, 0.15),
    //   "& : hover" : {
    //     backgroundColor :alpha(theme.palette.common.white, 0.25)
    //   },
      borderRadius:  5,
      [theme.breakpoints.down("sm")] : {
       display : (props) => props.open ? "flex" : "none"
      }
   },
   input:  {
       color : "#fff",
       marginLeft: theme.spacing(1)
   }
   ,icons : {
    display: 'flex',
    alignItems : 'center'
    
   },
   badge:  {
    marginRight: theme.spacing(3)
   },
   searchicon : {

   },
   lgText : {
       display: "none",
       [theme.breakpoints.up("sm")]:{
           display: "block"
       }
   },
   smText:  { 
       display: "block",
       [theme.breakpoints.up("sm")]:{
       display: "none"
   },
     }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({open})
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolBar}>
                <Typography variant="h6" className={classes.lgText}>dcom</Typography>
                <Typography variant="h6" className={classes.smText}>Home</Typography>

                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder="search"  className={classes.input}/>

                </div>

              <div className={classes.icons}>
                <Search className={classes.searchicon} onClick={() => setOpen(true)}/>
                <Badge badgeContent={4} color="secondary" className={classes.badge}>
                 <Mail/>
                </Badge>
                <Badge badgeContent={5} color="success" className={classes.badge}>
                 <NotificationAdd/>
                </Badge>
                 
                  <Avatar src="https://images.pexels.com/photos/1181293/pexels-photo-1181293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="logo"/>
                        </div>



                
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
