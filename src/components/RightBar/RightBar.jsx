import React from 'react'
import {Typography,Avatar,AvatarGroup,Container,Paper,Divider,Link} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {CheckCircleRounded} from '@mui/icons-material'

import Gallery from '../ImageGallery/ImageGallery'

const useStyles = makeStyles((theme) =>({
    container : {
        paddingTop : theme.spacing(10),
        display: "flex",
        alighItems:  "center",
        position :  "sticky",
        top : 0
        
  },
  avatar: { 
    marginBottom : theme.spacing(2),
  },
  
  div1 : {
      display : "flex",
      flexWrap: "wrap",
      marginTop : theme.spacing(5),
      marginBottom : theme.spacing(2)
  },
    divitems : {
        marginBottom : theme.spacing(2),
        padding : theme.spacing(2),
        display: "flex",
        justifyContent : "flex-start"
    },
    icons :{
        marginRight : theme.spacing(2),
        cursor :"pointer"
    },
    text:{
       fontSize :16,
       fontWeight : 500,
       color : "#555"
      
    },
    link:  {
       marginLeft : theme.spacing(2),
       fontSize :16,
       color : "#555",
       listStyle :"none"
    }
}));


const RightBar = () => {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Typography gutterBottom variant="h6" className={classes.text}>Online friends..</Typography>
            <AvatarGroup max={4} className={classes.avatar}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/6.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/7.jpg" />
            </AvatarGroup>

            
            <div className="div1">
                <Paper elevation={1} className={classes.divitems}>
                    <CheckCircleRounded className={classes.icons} style={{color : "green"}}/>
                  <Typography variant="body1" color="textSecondary">Online friends..</Typography>
                </Paper> 
                <Paper elevation={1} className={classes.divitems}>
                    <CheckCircleRounded className={classes.icons} style={{color : "green"}}d/>
                  <Typography variant="body1" color="textSecondary">Offline friends..</Typography>
                </Paper> 
                <Paper elevation={1} className={classes.divitems}>
                    <CheckCircleRounded className={classes.icons} style={{color : "green"}}d/>
                  <Typography variant="body1" color="textSecondary">Any One</Typography>
                </Paper> 
                <Paper elevation={1} className={classes.divitems}>
                    <CheckCircleRounded className={classes.icons} style={{color : "green"}}d/>
                  <Typography variant="body1" color="textSecondary">Outside</Typography>
                </Paper> 
                
            </div>
            
            <Typography className={classes.text} color="initial">Gallery</Typography>
            <Divider variant="middle"  className={classes.divider} />
            <Gallery/>
            
            <Typography className={classes.text} gutterBottom color="initial">Categories</Typography>
            <Link href="#" variant="body2" underline="none" className={classes.link}>Sports</Link>
            <Link href="#" variant="body2" underline="none" className={classes.link}>Food</Link>
            <Link href="#" variant="body2" underline="none" className={classes.link}>Music</Link>
            <Divider flexItem style={{marginBottom : 5}} />
            <Link href="#" variant="body2" underline="none" className={classes.link}>Movies</Link>
            <Link href="#" variant="body2" underline="none" className={classes.link}>Science</Link>
            <Link href="#" variant="body2" underline="none" className={classes.link}>Life</Link>
         </Container>
    )
}

export default RightBar
