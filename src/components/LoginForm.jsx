import { useState } from "react";
import axios from "axios";

const projectID = '67c54b93-59ba-429f-90b2-1daba09def99';

const LoginForm = () => {
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
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={state.username}
            onChange={handleChange}
            name='username'
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={state.password}
            onChange={handleChange}
            name='password'
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h2 className='error'>{error}</h2>
      </div>
    </div>
  );
};

export default LoginForm;

