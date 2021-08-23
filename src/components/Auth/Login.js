import React, { useState } from 'react';
import axiosInstance from '../Axios';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const history = useHistory();
  const [formInput, setFormInput] = useState({
    username: '',
    password: '',
  });
  const inputHandler = (event) => {
    let value, name;
    value = event.target.value;
    name = event.target.name;
    setFormInput({ ...formInput, [name]: value })
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const { username, password } = formInput;
    console.log(formInput)
    if (username && password)
    axios.post("http://localhost:8000/auth/login/", {
        username: username,
        password: password,
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.token.access);
          localStorage.setItem('refresh_token', res.data.token.refresh);
          axiosInstance.defaults.headers['Authorization'] ='JWT ' + localStorage.getItem('access_token');
          history.push('/');
        })
        .catch(error => { console.log(error) })
  }
  // console.log('t', token.data.token.access)
  return (
    <div>
      <form>
        <textarea
          type="text"
          name="username"
          onChange={inputHandler}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={inputHandler}
          placeholder="Password"
        />
        <br />
        <button type="submit" onClick={submitHandler}>Submit</button>
      </form>
    </div>
  )

}

export default Login
