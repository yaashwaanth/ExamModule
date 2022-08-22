import React from 'react'
import { Link } from "react-router-dom";
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div className='box'>
      <div className="nave">
      <button type="button" class="btn btn-light  btn-lg but1 m_er">EDRP</button>
     <Link to="/examform"><button type="button" class="btn btn-light  btn-lg but1 m_er">Form</button></Link> 
      <button type="button" class="btn btn-light  btn-lg but1 m_er"> Admit Card</button>
      <button type="button" class="btn btn-light  btn-lg but1 m_er"> Submision </button>
      {/* <button type="button" class="btn btn-light  btn-lg but1"> Admit Card</button> */}
      <Link to="/"><button type="button" class="btn btn-outline-warning  btn-lg but2 m_er"> Logout</button></Link>
      </div>
      
      
    </div>
  )
}

