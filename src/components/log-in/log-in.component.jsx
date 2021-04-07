import { useState } from "react";
import axios from "axios";

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './log-in.styles.css'

const projectID = '67c54b93-59ba-429f-90b2-1daba09def99';

const Login = () => {
  const [state, setstate] = useState({ username: "", password: "" });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {username,password} = state;

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  const handleChange =  (event) => {
    const { name, value } = event.target;
    setstate({ ...state, [name]: value });
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            value={state.username}
            handleChange={handleChange}
            name='username'
            placeholder="Username"
            required
          />
          <FormInput
            type="password"
            value={state.password}
            handleChange={handleChange}
            name='password'
            placeholder="Password"
            required
          />
          <div align="center">
            <CustomButton type="submit">
              Start chatting
            </CustomButton>
          </div>
        </form>
        <h2 className='error'>{error}</h2>
      </div>
    </div>
  );
};

export default Login;

