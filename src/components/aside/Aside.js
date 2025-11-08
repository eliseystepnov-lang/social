import logo from "../../img/logo.png"
import "./Aside.css"
import { NavLink } from "react-router-dom"

function Aside(){
    return(
        <aside className="aside">
            <img className="logo" src={logo} alt=""/>
            <ul className="asideContent">
                <li>
                    <NavLink className="asideContentCard" to="/profile">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" className="asideContentImg">
                            <path d="M23.05 7.84a1.5 1.5 0 0 1 1.9 0l16.1 13.2a1.5 1.5 0 0 1-.95 2.66h-2.33l-1.2 13.03A2.5 2.5 0 0 1 34.1 39H13.9a2.5 2.5 0 0 1-2.49-2.27L10.23 23.7H7.9a1.5 1.5 0 0 1-.95-2.66l16.1-13.2Zm.95 3.1L12.1 20.7h.87l1.4 15.3h8.13v-7.69a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V36h8.13l1.4-15.3h.87L24 10.94Z"></path>
                        </svg>
                        <p className="asideContentText">Профиль</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="asideContentCard" to="/messages">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" className="asideContentImg">
                            <path d="M2.18 9.67A2 2 0 0 1 4 8.5h40a2 2 0 0 1 1.74 3l-20 35a2 2 0 0 1-3.65-.4l-5.87-18.6L2.49 11.82a2 2 0 0 1-.31-2.15Zm18.2 17.72 4.15 13.15L40.55 12.5H8.41l9.98 11.41 11.71-7.2a1 1 0 0 1 1.38.32l1.04 1.7a1 1 0 0 1-.32 1.38L20.38 27.4Z"></path>
                        </svg>
                        <p className="asideContentText">Сообщения</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="asideContentCard" to="/friends">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" className="asideContentImg">
                            <path d="M18 12.5c-2.41 0-4.41 2-4.41 4.53 0 2.54 2 4.54 4.41 4.54s4.42-2 4.42-4.54c0-2.53-2.01-4.53-4.42-4.53Zm-7.41 4.53c0-4.13 3.29-7.53 7.41-7.53s7.42 3.4 7.42 7.53c0 4.14-3.3 7.54-7.42 7.54a7.48 7.48 0 0 1-7.41-7.54ZM18 29.88a8.68 8.68 0 0 0-8.3 6.39c-.15.53-.66.9-1.2.81l-1-.16a.94.94 0 0 1-.78-1.14c1.29-5.1 5.83-8.9 11.28-8.9 5.45 0 10 3.8 11.28 8.9a.94.94 0 0 1-.79 1.14l-.98.16c-.55.1-1.06-.28-1.2-.81a8.68 8.68 0 0 0-8.31-6.4ZM33 31.54c-.76 0-1.48.13-2.16.37-.52.19-1.12.01-1.38-.47l-.48-.88c-.27-.48-.09-1.1.42-1.3a9.38 9.38 0 0 1 3.6-.72c4.46 0 8.16 3.09 9.27 7.24.14.53-.23 1.05-.78 1.14l-.98.16c-.55.09-1.06-.28-1.22-.81A6.65 6.65 0 0 0 33 31.54ZM33 18.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM27.5 21a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"></path>
                        </svg>
                        <p className="asideContentText">Друзья</p>
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}
export default Aside