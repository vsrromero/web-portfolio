import {FaGithub} from 'react-icons/fa';
import {SiPhp} from 'react-icons/si';
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiLaravel,
    DiSass,
    DiMysql
} from 'react-icons/di'

import '../styles/components/projectsContainer.sass'

function ProjectsContainer () {
    return (
        <section className='projects-container'>
            <h2>Projects</h2>
            <p>
                Here you can find some of my latest and available projects to be checked.
            </p>

            <h3>Web Portfolio</h3>
            <p>
                I have been working in several projects simultaneously, and this is one of them, it looks simple, but I have used couple of main knowledge and concepts.
            </p>
            <p>
                This portfolio website was built using React, I tried to use several components, and bild it, at the same time, simple but complete, on example is my name and part of my bio, they are being get from GitHub with the GitHub API.
            </p>
            <h4>Main features/techonologies</h4>
                <ul>
                    <li>Created project using Vite in place of create-react-app</li>
                    <li>An integration with github API is running to get part of my Bio, name and also all my projects available, not only the main ones.</li>
                    <li>Using sass <span className='sass'><DiSass /></span> in place of regular CSS <span className='css'><DiCss3 /></span></li>
                    <li>Using props and Hooks</li>
                </ul>
            <p>Follow the link to github repository to check the full project description and source code</p>
            <a href='https://github.com/vsrromero/web-portfolio' className='button'><FaGithub /> Repository</a>

            <h3>Simplistic Web Portfolio</h3>
            <a href='https://vsrromero.github.io/webportfolio/' className='general-links' target='_blank'> &gt;&gt; https://vsrromero.github.io/webportfolio &lt;&lt;</a>
            
            <p>
                This was the first web portfolio I've done using only HTML, CSS and vanilla JavaScript.
            </p>
            <p>
                It has nothing much to be seeing, but it is a example of basic knowledge of these three main languages.
            </p>
            <p>
                It was part of my projects from the Full Stack Engineer course.
            </p>
            <h4>Main features/techonologies</h4>
                <ul>
                    <li>HTML 5 <span className='html'><DiHtml5 /></span></li>
                    <li>CSS 3 <span className='css'><DiCss3 /></span></li>
                    <li>Vanilla Javascript <span className='js'><DiJsBadge /></span></li>
                </ul>
            <p>Follow the link to github repository to check the full project description and source code</p>
            <a href='https://github.com/vsrromero/webportfolio' className='button' target='_blank'><FaGithub /> Repository</a>

            <h3>The Jamming</h3>
            <a href='https://loquacious-zuccutto-c58a58.netlify.app/' className='general-links' target='_blank'> &gt;&gt; https://loquacious-zuccutto-c58a58.netlify.app &lt;&lt;</a>
            
            <p>
                This is not a great and usefull app, but here you can see loads of practices, concepts and techniques put all together. 
            </p>
            <p>
                This app, basically allows the user to search songs, albuns or bands/artists on Spotify using the Spotify API.
            </p>
            <p>
                Due to a limitation of the free version of Spotify API, it is necessary to perform a first search so then the API will connect and allow the app works.
            </p>
            <h4>Main features/techonologies</h4>
                <ul>
                    <li>React <span className='react'><DiReact /></span></li>
                    <li>Fetch API</li>
                    <li>Class components</li>
                    <li>Props</li>
                </ul>
            <p>Follow the link to github repository to check the full project description and source code</p>
            <a href='https://github.com/vsrromero/jammming' className='button' target='_blank'><FaGithub /> Repository</a>

            <h3>Simple Financial Controller </h3>
            <a href='https://resonant-beijinho-c7917e.netlify.app/' className='general-links' target='_blank'> &gt;&gt; https://resonant-beijinho-c7917e.netlify.app &lt;&lt;</a>

            <p>
                This is a simple useful app that allows you to control your incomings and outcomings.
            </p>
            <p>
                All transactions will be saved at browser local storage.
            </p>
            
            <h4>Main features/techonologies</h4>
                <ul>
                    <li>React <span className='react'><DiReact /></span></li>
                    <li>Working with props and components</li>
                </ul>
            <p>Follow the link to github repository to check the full project description and source code</p>
            <a href='https://github.com/vsrromero/Financial-Controller' className='button' target='_blank'><FaGithub /> Repository</a>
           
            <h3>Management App</h3>
            <p>
                This project is a full stack project, from front to back-end, that I had frozen for while due to the Full Stack Engineer course I am enrolled.
            </p>
            <p>
                Despite it is not finished, couple of my knowledge of MVC, DAO and CRUD was applied here, so it is not a problem for a developer check the structure and the code to see part of what I have accomplished.
            </p>
            <p>
                I expect return to this project to consolidate my knowledge in Laravel and php.
            </p>
            <h4>Main features/techonologies</h4>
                <ul>
                    <li>Laravel <span className='laravel'><DiLaravel /></span></li>
                    <li>php <span className='php'><SiPhp /></span></li>
                    <li>MySql <span className='php'><DiMysql /></span></li>
                    <li>Blade</li>
                </ul>
            <p>Follow the link to github repository to check the full project description and source code</p>
            <a href='https://github.com/vsrromero/managementApp' className='button' target='_blank'><FaGithub /> Repository</a>

            <h3>Want check more? ...</h3>
            <p>
                Visit my GitHub page...
            </p>
            <a href='https://github.com/vsrromero/' className='button' target='_blank'><FaGithub /> vsrromero</a>
        </section>
    )
}

export default ProjectsContainer;