import {useState,useEffect} from "react";
import Header from './components/Header';
import ListTask from './components/ListTask';
import Filters from  './components/Filters';
import Instruction from './components/Instruction';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';


  function changeMedia(mq){
    setDarkMode(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia);
    setDarkMode(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])
  
  return (
    <main className={mainClass}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
        <ListTask />
        <Filters/>
        <Instruction />
      </main>
  );
}

export default App;
