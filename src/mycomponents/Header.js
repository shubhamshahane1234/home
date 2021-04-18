import React from 'react'
import {Link} from "react-router-dom";


export default function Header() {
 
    

    return (
        <>


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Shubham</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">about</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>



          
            
        </>
    )
}
