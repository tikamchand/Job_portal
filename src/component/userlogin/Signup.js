import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
const Login=()=>{

    const paperStyle={padding :20,height:'40vh',width:'280px', margin:"10% auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnStyle={margin:'15px 0'}
    const textStyle={marginBottom:'15px'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required style={textStyle}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Sign in</Button>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign In 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login