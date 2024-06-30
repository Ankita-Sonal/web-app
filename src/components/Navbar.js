import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import"./Navbar.css";

export const Navbar = () => {

    const[menuOpen,setMenuOpen]=useState(false)
  return (
    <nav>

        <li className="title">WEBAPP</li>
        <div className="menu" onClick={()=>{
             setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" :""}>
            <li>
            <NavLink to="/services">ExpenseTracker</NavLink>
            </li>
            <li>
            <NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
  )
}
