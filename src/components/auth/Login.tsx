import React from "react";
import user from '/Users/bradsnyder/Desktop/red_badge/red-badge-project/server/controllers/usercontroller.js';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";

// type LoginProps = {
//     email?: any,
//     password?: any,
// }

// type LoginState = {
//     email: string,
//     password: string,
// };

// const initialState:LoginState = {
//     email: '',
//     password: '',
// };

// export class Login extends React.Component {

// constructor(props: LoginProps) {
//     super(props)
//     const initialState = {
//         email: '',
//         password: '',
//     }
// }

// const Login = (props) => {
// const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`https://localhost:3000/user/login`, {
//         method: 'POST',
//         body: JSON.stringify({user:{username: props.username, passwordhash: props.password}}),
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         })
//     }).then (
//         (res) => res.json()
//     ).then ((data) => {
//         props.updateToken(data.sessionToken)
//     })
// }

//     render() {
//         return(
//             <div>
//                 <Box sx={{ p: 2 }}>
//                 <Card elevation={3} sx={{ m: 2 }}>
//                     <CardContent>
//                     <Typography align='left' sx={{ fontSize: 35 }} color='#29648A'>Login</Typography>
//                         <TextField id="standard-basic" label="email" variant="standard" />
//                         <TextField id="standard-basic" label="password" variant="standard" />
//                     </CardContent>
//                     <CardActions>
//                             <Button size='large' variant='contained' style={{margin: '0 auto', display: 'flex'}}>Log me in!</Button>
//                     </CardActions>
//                 </Card>
//                 </Box>
//             </div>
//         )
//     }
// } 