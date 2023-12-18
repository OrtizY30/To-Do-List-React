import React, { useState } from 'react'
import perfil from '/public/img/photo.jpg'
import menu from '/public/svg/menu.svg'
import exit from '/public/svg/exit.svg'


const Nav = () => {
    const [menuH, setMenuH] = useState(false)
    return (
        <>
            <header>
                <div className={`${menuH && 'iconH'} menuBox`}>

                    <div className={` menuH`} onClick={() => setMenuH(!menuH)}>
                        <img src={menuH ? exit : menu} alt="icons menu" />
                    </div>
                    <img className='perfil' src={perfil} alt="perfil" />
                </div>
                <nav className={`${menuH && 'navDes'} menuOf`}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Tasks</a>
                        </li>
                        <li>
                            <a href="#">Calendar</a>
                        </li>
                        <li>
                            <a href="#">More info</a>
                        </li>
                    </ul>
                </nav>

                <h1>To Do List</h1>
            </header>
            <aside>
                
                    <img className='perfil' src={perfil} alt="perfil" />
              
                <nav className={`${menuH && 'navDes'} menuOf`}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Tasks</a>
                        </li>
                        <li>
                            <a href="#">Calendar</a>
                        </li>
                        <li>
                            <a href="#">More info</a>
                        </li>
                    </ul>
                </nav>
                <h1>ToDo List</h1>
            </aside>
        </>

    )
}

export default Nav