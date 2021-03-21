
import React, {useState} from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {Typography, Grid, Button, TextField} from '@material-ui/core'

const useStyles = makeStyles({
    regularBorder: {
        border: '0px solid yellow',
        borderRadius: '10px',
    },
    regularMargin:{
        padding: '5px;'
    },
    messageFont:{
        size: '10em',
        color: '#bbbbbb',
        fontFamily: 'Verdana',
    }
});

const CustomTextField = withStyles({
    root:{
        '& label':{
            color: 'white',
        },
        '& fieldset':{
            borderColor: 'white',
        },
        '& label.Mui-focused':{
            color: '#33ee33'
        },
        '& input':{
            color: 'white',
        },
        '& .MuiOutlinedInput-root':{
            '& fieldeset':{
                borderColor: 'white',
            },
            '&:hover fieldset':{
                borderColor: 'white',
            },
            '&.Mui-focused fieldset':{
                borderColor: '#33ee33',
            }
        }
    }
})(TextField);

function Login(props){
    const classes = useStyles();
    const [loginValue, setLoginValue] = useState("admin");
    const [senhaValue, setSenhaValue] = useState("123456");
    const [status, setStatus] = useState({message: ""});
    return(
        <Grid className={`${classes.regularBorder} ${classes.regularMargin}`} container direction='column' spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h5'>Login</Typography>
            </Grid>
            <Grid item><CustomTextField variant='outlined' label='Login' onChange={(e) => setLoginValue(e.target.value)}/></Grid>
            <Grid item><CustomTextField variant='outlined' label='Senha' onChange={(e) => setSenhaValue(e.target.value)}/></Grid>
            <Grid item><Typography className={`${classes.messageFont}`} variant='h6'>{status.message}</Typography></Grid>
            <Grid item>
                <Button variant='contained' size='medium' onClick={() => resolveLoginClick(loginValue, senhaValue, setStatus)}>LOGIN</Button>
            </Grid>
        </Grid>
    );
}

const resolveLoginClick = (login, senha, onResponse) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    const init = {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        body: JSON.stringify({email: login, senha: senha}),
    }
    const request = new Request('https://localhost:44332/api/logins', init);
    fetch(request)
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .then((data) => {
            onResponse(data);
        });
};

export default Login;