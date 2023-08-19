import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Login from "./components/login"
import Layout from "./components/Layout"
import Home from "./components/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
