
import {Container, AppBar, Typography, Grid, Grow} from '@material-ui/core'
import memos from './components/champions.png'
import {Posts} from './components/Posts/Posts.js'
import {Form} from './components/form/Form.js'
import useStyles from './styles.js'
import {useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'
import { getPost } from './actions/post.js'
function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(()=>{
    dispatch(getPost())

  },[currentId,dispatch])

  return (
    <Container maxidth="lg">
    <AppBar position="static" color="inherit" className={classes.appBar}>
    <Typography className={classes.heading} variant="h3" align="center" >Football Collection</Typography>
    <img src={memos} className={classes.image} alt=".."height="70" float="right"/>
    </AppBar>
    <Grow in>
    <Container>
    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
      <Grid item xs={12} sm={7}>
      <Posts setCurrentId={setCurrentId}/>
      </Grid>
      <Grid item xs={12} sm={4}>
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
      </Grid>
    </Grid>
    </Container>
    </Grow>
    </Container>
  );
}

export default App;
