import React, { Component , useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { SignUp } from "./SignUp";
// import { Login } from "./Login";

export class Intro extends Component {

        render() {
            return (
                <div>
                    <Box sx={{ p: 2 }}>
                        <Card elevation={3} sx={{ m: 2 }}>
                            <CardContent>
                                <Typography align='left' sx={{ fontSize: 35 }} color='#29648A'>Want a movie suggestion based off of another movie you like?</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='large' variant='contained' style={{ margin: '0 auto', display: 'flex' }} onClick={() => { <SignUp />; console.log('Signup') }}>Log in</Button>
                                {/* <Button size='large' variant='contained' style={{ margin: '0 auto', display: 'flex' }} onClick={() => { <Login />; console.log('Login') }}>Sign up</Button> */}
                            </CardActions>
                        </Card>
                    </Box>
                </div>
            )
        }
    }