import {AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';

import '../styles/components/Information.sass'

function Information () {

    
    
    return (
        <section id='information'>
            <div className='info-card'>
                <AiOutlineMail id='email'/>
                <div>
                    <h3>E-mail</h3>
                    <p className='email'>vsr.romero@gmail.com</p>
                </div>
            </div>
            <div className='info-card'>
                <AiFillEnvironment id='location'/>
                <div>
                    <h3>Location</h3>
                    <p className='email'>Liverpool - UK</p>
                </div>
            </div>
        </section>
    )
}

export default Information;