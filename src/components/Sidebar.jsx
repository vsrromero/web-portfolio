import SocialNetworks from './SocialNetworks';
import Information from './Information';

import Avatar from '../img/victorSqr.png'

import '../styles/components/sidebar.sass'

function Sidebar (props) {
    return (
        <aside id="sidebar">

            <img src={Avatar} alt='Victor Romero'/>
            <p className="title">Full-Stack Dev</p>
            <SocialNetworks />      
            <Information />
            <a href="https://docs.google.com/document/d/1MPjMcciJKRiIUbABdK7IItcpzmbFWaBX/edit?usp=sharing&ouid=102759505785999791741&rtpof=true&sd=true" className="button">Download CV</a>
        </aside>
    )
}

export default Sidebar;