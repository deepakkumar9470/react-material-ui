import React from 'react'
import { Container} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {} from '@mui/icons-material'

import Post from '../Post/Post'

const useStyles = makeStyles((theme) =>({
    container : {
       paddingTop : theme.spacing(10),
       
  },
  
}))
const Feed = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>

                <Post alphabet="D"/>
                <Post alphabet="A"/>
                <Post alphabet="S"/>
                <Post alphabet="V"/>
                <Post alphabet="M"/>

         </Container>
    )
}

export default Feed
