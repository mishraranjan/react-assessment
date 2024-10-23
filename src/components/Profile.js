import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem('loggedInUser');
    const [userData, setUserData] = useState({ email: '', name: '', password: '' });

    useEffect(() => {
        if (!loggedInUser) {
            navigate('/login');
        } else {
            const user = JSON.parse(localStorage.getItem(loggedInUser));
            setUserData(user);
        }
    }, [loggedInUser, navigate]);

    const handleEdit = (e) => {
        e.preventDefault();
        localStorage.setItem(loggedInUser, JSON.stringify(userData));
        alert('Profile updated!');
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login');
    };

    return (
        <div className="container">
            <h2>Profile</h2>
            <form onSubmit={handleEdit}>
            <input
                    type="email"
                    value={userData.email}
                    disabled
                />
                <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    required
                />
                <input
                type='text'
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                />
                <div>
                <button type="submit" className='btn'>Save Changes</button>
                </div>
            </form>
            <button onClick={handleLogout} className='logout' >Logout</button>
        </div>
    );
}

export default Profile;
