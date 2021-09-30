import React, { Component } from 'react';
// import Intro from './components/auth/Intro';
import './App.css';
// import { SignUp } from './components/auth/SignUp';
// import { Login } from './components/auth/Login';
import { Discover } from './components/movies/Discover';
import { Intro } from './components/auth/Intro';
import { SignUp } from './components/auth/SignUp';

// function App() {
//   const [sessionToken, setSessionToken] = useState('');
//   useEffect(() => {
//     if (localStorage.getItem('token')) {
//       setSessionToken(localStorage.getItem('token'));
//     }
//   }, [])

//   const updateToken = (newToken) => {
//     localStorage.setItem('token', newToken);
//     setSessionToken(newToken);
//   }

//   const clearToken = () => {
//     localStorage.clear();
//     setSessionToken('');
//   }

//   const protectedView = () => {
//     return (setSessionToken === localStorage.getItem('token') ? <Discover token={sessionToken} />)
//   }

//   return (
//     <div>

//     </div>
//   )
// }

// export default App;

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Discover />
      </div>
    );
  }
}