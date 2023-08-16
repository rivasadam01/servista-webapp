import React, { useState } from "react"
import "./Login.css"

function Login() {
  const [username, setUsername] = useState("")

  const handleLogin = () => {
    // Handle user login (simplified)
  }

  return (
    <div className="App">
      <h1>Servista</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
