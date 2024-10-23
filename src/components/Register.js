import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (localStorage.getItem(email)) {
            alert('Account already exists!');
            return;
        }

        const userData = { email, password, name };
        localStorage.setItem(email, JSON.stringify(userData));
        alert('Registration successful! You can now log in.');
        navigate('/login');
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div>
                <button type="submit" className='btn'>Register</button>
                </div>
            </form>
            <p>Already have an account? 
                <Link to="/login" className='link'>Login here</Link></p>
        </div>
    );
}

export default Register;
