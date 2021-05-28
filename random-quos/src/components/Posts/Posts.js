import {Post} from './Post/Post'
import {useSelector} from 'react-redux'
import useStyles from './styles.js'
import {Grid, CircularProgress} from '@material-ui/core'
export const Posts = ({setCurrentId}) =>
{
    const posts=useSelector((state)=> state.posts)
    const classes = useStyles();
    console.log(posts)
    return(
      !posts.length ? <CircularProgress />: (
        <div>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post}  setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>
        </div>

    )
    )
}