import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons' 
const Sidebar = () => (
    <div className = "nav-bar">
        <Link className = "logo" to="/">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        {/* These are the links, which are displayed in the navbar */}
        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">  {/*This is to set the home page */}
                <FontAwesomeIcon icon = {faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact = "true" activeclassname = "active" className = "about-link" to = "/about">  {/*This is to set the user page */}
                <FontAwesomeIcon icon = {faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact = "true" activeclassname = "active" className = "contact-link" to = "/contact">  {/*This is to set the contacts */}
                <FontAwesomeIcon icon = {faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel= 'noreferrer' href='https://linkedin.com/in/danielhyowoncho123'>
                    <FontAwesomeIcon icon={faLinkedin} color ="#44d4e"/>
                </a>
            </li>
            <li>
                <a target = "_blank" rel= 'noreferrer' href='https://github.com/chohyo43'>
                    <FontAwesomeIcon icon={faGithub} color ="#44d4e"/>
                </a>
            </li>
            <li>
                <a target = "_blank" rel= 'noreferrer' href='https://www.youtube.com/channel/UCRcVVjz7p_178Nymb6i8eCg'>
                    <FontAwesomeIcon icon={faYoutube} color ="#44d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar