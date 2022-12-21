import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import { useState, useEffect } from 'react';


import './styles/components/app.sass'

function App() {

  //const [userData, setUserData] = useState();
  
  /*
  useEffect(() => {
    const fetchData = async () => {
      const dataFetch = await fetch('https://api.github.com/users/vsrromero')
      .then(response => response.json()
      .then(data =>{setUserData(data)}
      ));
    }
    
    fetchData()
    
  },[])   
  */

 const userData = {
   name: 'Victor Romero',
   bio: 'Undergraduate in system analysis in Brazil, had been working as business analyst for more than 6 years and now seeking new challenges, so starting coding.',
   location: 'England'
 }

  return (
    <div id="portfolio">
      <h1>{userData.name}</h1>
      <Sidebar />
      <MainContent {...userData} />
    </div>
  );
}

export default App
