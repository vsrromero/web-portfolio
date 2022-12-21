import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import { useState, useEffect } from 'react';

import './styles/components/app.sass'

function App() {

  const [userData, setuserData] = useState({});

  useEffect(() => {

    const fetchUserData = async () => {
      const dataFetch = await fetch('https://api.github.com/users/vsrromero');
      const data = await dataFetch.json();
      setuserData({...data});
    }

    fetchUserData();

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
