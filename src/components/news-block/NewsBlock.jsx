
import React from 'react'
import {Grid, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    contentPosition:{
        display: 'flex',
        justify: 'flex-start',
    },
    titleFont:{
        fontWeight: 'bold',
    },
});

function NewsBlock(props){
    const classes = useStyles();

    return(
        <Grid container direction='column'>
            <Grid item className={`${classes.contentPosition}`}>
                <Typography className={`${classes.titleFont}`} variant='h5'>{props.title}</Typography>
            </Grid>
            <Grid item className={`${classes.contentPosition}`}>
                <Typography variant='h6'>{props.text}</Typography>
            </Grid>
        </Grid>
    );
}

export default NewsBlock;