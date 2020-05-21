import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const history = useHistory();

    const handleChange = e => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', credentials)
        .then((res) => {
            localStorage.setItem('token', res.data.payload);
            history.push('/friends')
        })
        .catch(err => console.log(err.response));
        setCredentials({username:'', password: ''})
    }
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            placeholder='Username'
            type='text'
            name='username'
            value={credentials.usename}
            onChange={handleChange}
            />

             <input
             placeholder='Password'
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
            />
            <button>Log in</button>
        </form>
    </div>
)
}

export default Login;















// const login = () => {
//     axios.post('endpoint/here', userCredentials)
//       .then(res => {
//         localStorage.setItem('token', res.data.token);
//         props.history.push('/dashboard');
//       }
//   }



// import React, { useState } from 'react';
// import { axiosWithAuth } from '../path/to/module';

// const Login = (props) => {
//  const [credentials, setCredentials] = useState({});

//   const login = e => {
//     e.preventDefault();
//     axiosWithAuth().post('login/endpoint', credentials)
//       .then(res => {
//         localStorage.setItem('token', res.data.token);
//         this.props.history.push('/');
//       })
//   }

//   const handleChange = e => {
//       setCredentials: {
//         ...credentials,
//         [e.target.name]: e.target.value,
//       }
//   }

//     return (
//       <div>
//         <form onSubmit={this.login}>
//           <input
//             type="text"
//             name="username"
//             value={credentials.username}
//             onChange={this.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={this.handleChange}
//           />
//           <button>Log in</button>
//         </form>
//       </div>
//     )
// }