import React from 'react'
import "./Navbar.css";
import { useContext } from 'react';
import { BooksContext } from '../context/Context';


const Navbar = () => {
    const {handleInput} = useContext(BooksContext);
  return (
    <div className='navbar'>
        <h1 className='head1'>Ömer Zemheri</h1>
        <input type="text" onChange={(e) => handleInput(e)} className = "inputbook" placeholder='Searh Book....'/>
    </div>
  )
}

export default Navbar