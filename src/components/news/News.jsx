
import React, {useState, useEffect} from 'react'
import {Divider, makeStyles} from '@material-ui/core'
import {Grid, Typography} from '@material-ui/core'
import NewsBlock from '../news-block/NewsBlock'

const useStyles = makeStyles({
    regularBorder: {
        border: '0px solid yellow',
        borderRadius: '10px',
    },
    regularMargin:{
        padding: '5px;'
    },
    dividerColor:{
        backgroundColor: '#444444',
    },
});

function News(props){
    const classes = useStyles();
    
    const [news, setNews] = useState([
        {
            id: 1,
            titulo: "Titulo1",
            texto: "Texto1",
        }
    ]);

    useEffect(() => {
        const headers = new Headers({
            'Content-Type': 'application/json',
        });
        const init = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
        }
        const request = new Request(props.source, init);
        fetch(request)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setNews(data);
            });
    }, [props.source]);

    return(
        <Grid className={`${classes.regularBorder} ${classes.regularMargin}`} container direction='column' spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h5'>News</Typography>
            </Grid>
            {
                news.map(value => {
                    return( 
                        <div>
                            <Divider className={classes.dividerColor}/>
                            <NewsBlock key={value.id} title={value.titulo} text={value.texto}/> 
                        </div>
                    );
                })
            }
        </Grid>
    );
};

export default News;