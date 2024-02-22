import React from 'react'


import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='Name'>
                <p className='p'>Omar Rifai</p>
            </div>
            <div className='navbar-items'>
                <ul className='Navbar-ul'>
                    <li className='Navbar-li'><a href='/'>Home</a></li>
                    <li className='Navbar-li'><a href='#aboutme'>About Me</a></li>
                    <li className='Navbar-li'><a href='#education'>Education</a></li>
                    <li className='Navbar-li'><a href='#experience'>Experience</a></li>
                    <li className='Navbar-li'><a href='#skills'>Skills</a></li>
                    <li className='Navbar-li'><a href='#courses'>Courses</a></li>
                    <li className='Navbar-li'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar