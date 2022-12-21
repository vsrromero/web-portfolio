import '../styles/components/aboutContainer.sass'

function AboutContainer (props) {
   
    return (
        <section className='about-container'>
            <h2>Bio</h2>
            <p>{props.bio}</p>
            <p>Always worked side by side with the dev team.</p>
            <p>Actually I am studying to become a full stack egineer, aiming the back-end, so I am getting as much knowledge as possible in all main languages.</p>
            <p><span>Programming isn't about what you know, it's about what you can figure out.</span> - <em>Chris Pine</em></p>
        </section>
    )
}

export default AboutContainer