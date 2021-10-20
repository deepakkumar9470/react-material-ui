import React from 'react'
import {ImageList,ImageListItem,Box} from '@mui/material'

import {makeStyles} from '@mui/styles'
import {} from '@mui/icons-material'


const useStyles = makeStyles((theme) =>({
     box:  {
         position: 'sticky',
     },
     list : {
         paddingRight : theme.spacing(5),
         flexWrap:  "wrap"
     }
  
}))

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=121&h=121&fit=crop&auto=format',
      title: 'Chairs',
    },
    {
      img: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Laptop',
    },
    {
      img: 'https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Doors',
    },
    {
      img: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Coffee',
    },
    {
      img: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      title: 'Storage',
    },
   
]



const Gallery = () => {
    const classes = useStyles()
   
    return (
        <Box  className={classes.box} sx={{ width: 500, height: 450 ,overflowY: 'scroll' ,overflowX: 'hidden' }}>
            <ImageList className={classes.list} variant="masonry" cols={3} gap={8}
            rowHeight={100}>
                {
                    itemData.map((i)=> (
                        <ImageListItem key={i.img}>
                            <img
                                src={`${i.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${i.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={i.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))
                }
                
            </ImageList>

        </Box>
    )
}

export default Gallery
