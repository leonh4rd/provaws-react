
import './App.css';
import {Grid, Container, makeStyles} from '@material-ui/core'
import Login from './components/login/Login'
import News from './components/news/News'

const useStyles = makeStyles({
  regularBorder: {
    border: '2px solid white',
    borderRadius: '10px',
  },
  defaultHeight:{
    minHeight: '500px',
  },
});

function App() {
  const classes = useStyles();
  return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Grid className={`${classes.regularBorder} ${classes.defaultHeight}`} container alignItems='center' spacing={2}>
              <Grid item xs={1}/>
              <Grid item xs={5}>
                <Login/>
              </Grid>
              <Grid item xs={5}>
                <News source='https://localhost:44332/api/noticias'/>
              </Grid>
              <Grid item xs={1}/>
            </Grid>
          </Container>
        </header>
      </div>
  );
}

export default App;
