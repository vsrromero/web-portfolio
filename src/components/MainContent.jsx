import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer';

import '../styles/components/mainContent.sass';

function MainContent (props) {

    return (
        <main id='main-content'>
            <AboutContainer {...props}/>
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    )
}

export default MainContent;