import React from 'react'
import {Box,Typography,Grid,Button,IconButton} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {UploadFile} from '@mui/icons-material'

const useStyles = makeStyles({
   button : {
    backgroundColor : "green", 
    color : "white"
   }
})

const Material = () => {
    const classes = useStyles()

    return (
        <div>

            <Button variant="outlined" color="info" 
                    size="large" startIcon={<UploadFile/>}
                    className={classes.button}>
                Upload File
                
            </Button>

            <IconButton aria-label="upload">
              <UploadFile/>
            </IconButton>
            
        </div>
    )
}

export default Material
