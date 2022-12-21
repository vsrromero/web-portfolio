import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

import '../styles/components/socialNetworks.sass';

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn />, url:'https://www.linkedin.com/in/victor-silvestrin-romero'},
    {name: 'github', icon: <FaGithub />, url:'https://github.com/vsrromero'}
]

function SocialNetworks () {
    return (
        <section id="social-networks">
            {socialNetworks.map(network => (
                <a href={network.url} className='social-button' id={network.name} key={network.name} target='_blank'>
                    {network.icon}
                </a>
            ))}
        </section>
    );
}

export default SocialNetworks;