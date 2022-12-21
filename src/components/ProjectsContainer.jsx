import {FaCss3, FaGithub, FaSass} from 'react-icons/fa';

import '../styles/components/projectsContainer.sass'

function ProjectsContainer () {
    return (
        <section className='projects-container'>
            <h2>Projects</h2>
            <p>
                Here you can find some of my latest projects
            </p>

            <h3>Web Portfolio</h3>
            <p>
                I have been working in several projects simultaneously, and this is one of them, it looks simple, but I have used a lot of knowledge and concepts from behind.
            </p>
            <p>
                This portfolio website was built using React, I tried to use several components and bild it, at the same time, simple but complete.
            </p>
            <p>
                <h4>Main features/techonologies</h4>
                <ul>
                    <li>Created project using Vite in place of create-react-app</li>
                    <li>An integration with github API is running to get part of my Bio, name and projects.</li>
                    <li>Using sass <FaSass className='sass' /> in place of regular CSS <FaCss3 className='css'/></li>
                    <li>Using props and Hooks</li>
                </ul>
            </p>
            <p>Follow the link to github repository to check the full project description and source code</p>
            <a href='#' className='button'><FaGithub /> Repository</a>

            <h3>Web Portfolio</h3>
            <p>
                I have been working in several projects simultaneously, and this is one of them, it looks simple, but I have used a lot of knowledge and concepts from behind.
            </p>
            <p>
                This portfolio website was built using React, I tried to use several components, and bild it at the same time, simple but complete.
            </p>
            <p>
                An integration with github API is running to get my Bio, name and projects.
            </p>
           
            <h3>Web Portfolio</h3>
            <p>
                I have been working in several projects simultaneously, and this is one of them, it looks simple, but I have used a lot of knowledge and concepts from behind.
            </p>
            <p>
                This portfolio website was built using React, I tried to use several components, and bild it at the same time, simple but complete.
            </p>
            <p>
                An integration with github API is running to get my Bio, name and projects.
            </p>
           
            <h3>Web Portfolio</h3>
            <p>
                I have been working in several projects simultaneously, and this is one of them, it looks simple, but I have used a lot of knowledge and concepts.
            </p>
            <p>
                This portfolio website was built using React, I tried to use several components, and bild it at the same time, simple but complete.
            </p>
            <p>
                An integration with github API is running to get my Bio, name and projects.
            </p>

        </section>
    )
}

export default ProjectsContainer;