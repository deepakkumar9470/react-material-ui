import React,{useState} from 'react'
import {Typography,
        Card,CardMedia,CardActions,
        Avatar,CardHeader,CardContent,
        IconButton,Collapse} from '@mui/material'
import {makeStyles,styled} from '@mui/styles'
import {FavoriteOutlined,ShareOutlined,ExpandMoreOutlined,MoreVert} from '@mui/icons-material'

import {red} from '@mui/material/colors';

const useStyles = makeStyles((theme) =>({
   card : {
          maxWidth : '750px',
          marginBottom : theme.spacing(2),
          position: "sticky"
           
  },
  media : {
       width:  '100%',
       height: '300px'
  }
  
}))

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const Post = ({alphabet}) => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    return (
        <Card className={classes.card}>

            <CardHeader
             avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {alphabet}
                </Avatar>
                 }
            action={
             <IconButton aria-label="settings">
               <MoreVert/>
            </IconButton>
           }
             title="Shrimp and Chorizo Paella"
             subheader="September 14, 2016"

            />
            
            <CardMedia
             className={classes.media}
             component="img"
             height="194"
             image="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="Paella dish"
             />
             
             <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
              </CardContent>

           <CardActions>
             <IconButton aria-label="add to favorites">
               <FavoriteOutlined/> 
             </IconButton>   

             <IconButton aria-label="share">
               <ShareOutlined />
             </IconButton>

             <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
               <ExpandMoreOutlined />
             </ExpandMore>
            
           </CardActions>   


           <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>

         </Card>
    )
}

export default Post
