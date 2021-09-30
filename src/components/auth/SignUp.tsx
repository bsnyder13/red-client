import React from "react";
import user from '/Users/bradsnyder/Desktop/red_badge/red-badge-project/server/controllers/usercontroller.js';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material";

const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

type SignUpProps = {
    name?: any;
    value?: any;
}

type SignUpState = {
    username: string,
    email: string,
    password: string,
    errors: {
        username: string,
        email: string,
        password: string
    }
}

export class SignUp extends React.Component<SignUpProps, SignUpState>
{
    constructor(props: SignUpProps) {
        super(props);
        const initialState = {
            username: '',
            email: '',
            password: '',
            errors: {
                username: '',
                email: '',
                password: ''
            }
        }
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                errors.username = value.length < 5 ? 'Username has to be 5 or more characters please!' : '';
                break;
            case 'email':
                errors.email = Regex.test(value) ? '' : 'Sorry, that email is not valid';
                break;
            case 'password':
                errors.password = value.length < 8 ? 'Hey, you know your password needs to be longer, try 8 or more characters!' : '';
                break;
            default:
                break;
        }
        this.setState(Object.assign(this.state, { errors, [name]: value }));
        console.log(this.state.errors);
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        let validity = true;
        Object.values(this.state.errors).forEach(
            (val) => val.length > 0 && (validity = false)
        );
        if (validity == true) {
            console.log('You can register');
        } else {
            console.log("You can't register")
        }
    }

    render() {
        const { errors } = this.state
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                <Typography align='left' sx={{ fontSize: 35 }} color='#29648A'>Sign up</Typography>;
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className='fullName'>
                            <label htmlFor='fullName'>Username</label>
                            <input type='text' name='fullName' onChange={this.handleChange} />
                            {errors.username.length > 0 && <span style={{ color: "red" }}>{errors.username}</span>}
                        </div>
                        <div className='email'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' onChange={this.handleChange} />
                            {errors.email.length > 0 && <span style={{ color: "red" }}>{errors.email}</span>}
                        </div>
                        <div className='password'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' onChange={this.handleChange} />
                            {errors.password.length > 0 && <span style={{ color: "red" }}>{errors.password}</span>}
                        </div>
                        <Button size='large' variant='contained' style={{ margin: '0 auto', display: 'flex' }}>Sign me up!</Button>
                    </form>
                </div>
            </div>
        );
    }
}