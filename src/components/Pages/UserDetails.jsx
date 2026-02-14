import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UserDetails.css';


function UserDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const users = {
        1: { name: "Alice", role: "Admin", email: "alice@example.com" },
        2: { name: "Bob", role: "Editor", email: "bob@example.com" },
        3: { name: "Charlie", role: "Viewer", email: "charlie@example.com" }
    };

    const user = users[id];

    if (!user) return <h2>User not Found</h2>
    return (
        <div className="users-container">
            <h2>User Profile</h2>
            <div className="user-data">
                <h3>{user.name}</h3>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>ID:</strong> {id}</p>
            </div>

            <br />
            <button onClick={()=>navigate('/users')} className="btn">Back to User Data</button>
        </div>
    )
}

export default UserDetails;