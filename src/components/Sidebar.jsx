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
            <a href="" className="button">Download CV</a>
        </aside>
    )
}

export default Sidebar;