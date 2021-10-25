import React, { useState } from 'react'
import { Grid, Container, Paper, Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from '../assets/images/fondo.png'



const useStyles = makeStyles(theme =>({
  root : {
    backgroundImage: `url(${fondo})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    height: '100vh'

  },
  container : {
    opacity : '1',
    height : '60%',
    marginTop : theme.spacing(5),
    
  },
  div : {
    marginTop : theme.spacing(8),
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center'

  },

  form : {
    width : '100%',
    marginTop : theme.spacing(1)

  },
  button : {
    margin : theme.spacing(3, 0, 2)

  }
}))



const Login = () => {
const classes = useStyles()
  const [data, setData] = useState({username:'',password:''})
  const handleChange = (event) => {
    console.log(event.target.value)
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
    
  }

 
  const onSubmit = (event) => {
   
    event.preventDefault();
    if(data.username=='' || data.password==''){
      alert('Campos no pueden estar vacios');
    }else{
      window.location.href='/add';
    }
  } 





  return (
      
    <Grid container component='main' className={classes.root}>
      <Container component={Paper} elevation={20} maxWidth='xs' className={classes.container}>

        <div className={classes.div}>
          <Typography component='h1' variant='h5'> Sign In</Typography>
          <form className={classes.form}>
            <TextField 
                fullWidth
                autoFocus
                color='primary'
                margin='normal'
                variant='outlined'
                label='Username'
                name='username'
                value = {data.username}
                onChange = {handleChange}
            
            />

            <TextField 
                fullWidth
                type='password'
                color='primary'
                margin='normal'
                variant='outlined'
                label='Password'
                name='password'     
                value = {data.password}
                onChange = {handleChange}
            
            />

            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={onSubmit}
              
            > Sign In </Button>
          </form>         

        </div>

      </Container>

    </Grid>
          
      
    
  )
}

export default Login