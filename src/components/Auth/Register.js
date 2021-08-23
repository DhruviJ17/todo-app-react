import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    // const userDetails = JSON.parse(window.sessionStorage.getItem('user'));
    const [formInput, setFormInput] = useState({
        username: '',
        emailid: '',
        password: '',
    });
    const inputHandler = (event) => {
        let value, name;
        value = event.target.value;
        name = event.target.name;
        setFormInput({...formInput, [name]: value })
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const { username, emailid, password} = formInput;
        console.log(username,emailid,password)
        if (username && password && emailid)
            axios.post("http://localhost:8000/auth/register/", {
                username: username,
                password: password,
                emailid: emailid,
            })
            .then(res => { console.log(res) })
            .catch(error => { console.log(error) })
    }
    console.log('f',formInput);
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
                    type="email"
                    name="emailid"
                    onChange={inputHandler}
                    placeholder="Email-id"
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

export default Register;