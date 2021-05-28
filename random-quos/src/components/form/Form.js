import useStyle from './styles.js'
import {Paper, Typography, TextField, Button} from '@material-ui/core/';
import FileBase from 'react-file-base64';
import {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createPost,updatePost} from '../../actions/post.js'


export const Form = ({currentId, setCurrentId}) => {
    
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const [postData, setPostData]= useState({
        creator:'', title: '', message: '', tags:'', selectedFile: '',
    })
    const classes = useStyle();
    const dispatch = useDispatch();

    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);

    function Clear(){
      setCurrentId(0)
       setPostData({
        creator:'', title: '', message: '', tags:'', selectedFile: ''
       })
    }

    const handleSubmit= async (e)=>{
      e.preventDefault()
      if(currentId===0){
      dispatch(createPost(postData));
    }
      else{
       dispatch(updatePost(currentId,postData))
      }

  }

    return(
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} >
          <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Your favourite player'}</Typography>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})}/>
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})} />
          <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags: e.target.value})}/>
          <div className={classes.fileInput}><FileBase type="file" multiple={false}  onDone={({base64} )=>setPostData({...postData, selectedFile: base64})}/></div>
          <Button className={classes.buttonSubmit} onClick={handleSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small"  fullWidth onClick={Clear}>Clear</Button>
        </form>
      </Paper>
    )
}