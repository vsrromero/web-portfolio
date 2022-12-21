import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import { useState, useEffect } from 'react';


import './styles/components/app.sass'

function App() {

  const [userData, setuserData] = useState({});

  useEffect(() => {

    const fetchUserData = async () => {
      const dataFetch = await fetch('https://api.github.com/users/vsrromero');
      console.log('data fetch: '+dataFetch);
      console.log('My name: '+dataFetch.name);
      const data = await dataFetch.json();
      console.log('Meu nome data: '+data.name);
      setuserData({...data});
      console.log(userData);
      console.log(userData.name);
    }

    const fetchUserRepos = async () => {
      const dataFetch = await fetch ('https://api.github.com/users/vsrromero/repos');
      const data = await dataFetch.json();
      console.log('respos: '+data.name)
    }

    fetchUserData();
    fetchUserRepos();

   

  },[])  


  return (
    <div id="portfolio">
      <h1>{userData.name}</h1>
      <Sidebar />
      <MainContent {...userData} />
    </div>
  );
}

export default App
