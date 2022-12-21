import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiPhp,
    DiLaravel,
    DiPython,
    DiJava
} from 'react-icons/di'

import {SiCsharp, SiPhp} from 'react-icons/si';

import '../styles/components/technologiesContainer.sass'

const technologies = [
    {id: 'html', name: 'HTML5', icon: <DiHtml5/>, desc: 'Since university an for building small projects, I have being using HTML5, just done a new course to update my knowledges and now fixing knowledge'},
    {id: 'css', name: 'CSS3', icon: <DiCss3/>, desc: 'The nightmare of every back-end and full stack developers once CSS is not exact as other languages, it must be practiced'},
    {id: 'js', name: 'JavaScript', icon: <DiJsBadge/>, desc: 'The new hype, from front to back-end, I remember on University I use to hate JavaScript, and now, full of adaptations it is becoming a interesting language to code'},
    {id: 'react', name: 'React', icon: <DiReact/>, desc: 'I\'m still building some projects in React as this one, once I\'m still coursing this subject, it is more complex than Laravel, but for some reason I can\'t explain it is much more fun and challenging, for sure, it is my new fav front-end lib'},
    {id: 'php', name: 'PHP', icon: <SiPhp/>, desc: 'From a "lazy language", as we used to call on University, loosely typed, to something new and much more structured, I remember that PHP was the easiest language I learned at Uni, even easier than C, but this scenario have been changing'},
    {id: 'laravel', name: 'Laravel', icon: <DiLaravel/>, desc: 'I\'m having a break from my Laravel studies once I had enrolled at this course on It Career Switch, easier than React in my opinion, but so well structured, everything we learn about MVC is just right there'},
    {id: 'python', name: 'Python', icon: <DiPython/>, desc: 'The language I took a while to start liking, it forces the dev to indent it properly, the way Python is written, without using curly brackets, basicly only writting indented code, takes you out from the confort zone'},
    {id: 'java', name: 'Java', icon: <DiJava/>, desc: 'In my opinion till now, one of the most challenging language'},
    {id: 'csharp', name: 'CSharp', icon: <SiCsharp/>, desc: 'I still wrote only some lines in C#, but it is one of the subjects to be accomplished to certify at this course'}
];

function TechnologiesContainer () {
    return (
        <section className="technologies-container">
            <h2>Technologies</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technologies-card" id={tech.id} key={tech.id}>
                        
                        <div className="technologies-info">
                            <h3>{tech.name}{tech.icon}</h3>
                            <p>{tech.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer;