import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import "./Navbar.css"

function Layout() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
