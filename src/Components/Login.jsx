import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Please fill in all fields");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = existingUsers.find((user) => user.username === username);
        if (!user) {
            setError("User does not exist");
            return;
        }

        if (user.password !== password) {
            setError("Password is incorrect");
            return;
        }

        localStorage.setItem("user", JSON.stringify(user)); 
        setIsLoggedIn(true);
        navigate("/");
    };

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />  
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p>{error}</p>}
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
