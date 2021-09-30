import React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { MovieFetch } from './MovieFetch';
// import Typography from '@mui/material/Typography';
// import { Grid } from "@mui/material";

export class Discover extends React.Component {

    render() {
        return (
            <div>
                <Box sx={{ p: 2 }}>
                    <Card elevation={3} sx={{ m: 2 }}>
                        <CardContent>
                            <Typography align='left' sx={{ fontSize: 35 }} color='#29648A'>What's one of your favorite movies?</Typography>
                            <TextField id="standard-basic" label="favorite movie" variant="standard" />
                        </CardContent>
                        <CardActions>
                            <Button size='large' variant='contained' style={{ margin: '0 auto', display: 'flex' }} onClick={() => { <MovieFetch /> ; console.log('click') }}>Find some like it!</Button>
                        </CardActions>
                    </Card>
                </Box>
            </div>
        )
    }
}