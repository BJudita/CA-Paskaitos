import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div className="header">
      <div className="logo">
          <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <nav className="header-nav"><a href="#">Home</a><a href="#">Product</a><a href="#">Company</a><a href="#">Contact</a></nav>
     </div>
      <div className="banner">
    <h1>Header Image</h1>
     </div>
      <div className="cards-container">
        <div className="card">
          <h2>About</h2>
          <p>Lorem ipsum, ddolores non accusamus, nisi neque veniam deleniti vel officiis autem.</p>
        </div>
        <div className="card">
          <h2>Company</h2>
          <p>Dolor sit amet consectetur ad non accusamus, nisi neque veniam deleniti vel officiis autem.</p>
        </div>
        <div className="card">
          <h2>Services</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing cusamus, nisi neque veniam deleniti vel officiis autem.</p>
        </div>
      </div>
      <div className="content-container">
<div className="left">
  <h3>Content</h3>
  <p>Lorem ipsum dolor sit amet consectetur ue porrosam quisaque! Iste ea modiadipisicing elit itaq omnis qui officia asperiores laborum. ta pdunt. Excepturi, inventore esse!</p>
  <h5>Sub Header</h5>
  <p>Nemo nihil sunt magni reiciendis aliquam, eum minima exercitationem voluptates, culpa, molestias nesciunt dolor soluta? Ducimus esse rem quam iusto labore inventore aspernatur aliquam optio.</p>
  </div>
  <div className="right">
  <h6>Navigation</h6>
  <ul>
    <li><a href="#">Home</a></li>
  <li><a href="#">Product</a></li>
  <li><a href="#">Company</a></li>
  <li className="no-padding"><a href="#">Contact</a></li>
  </ul>
  </div>
      </div>
    </>
  )
}

export default App
