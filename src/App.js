import {useState,useEffect} from "react";
import Header from './components/Header';
import ListTask from './components/ListTask';
import Filters from  './components/Filters';
import Instruction from './components/Instruction';
import { Provider } from "react-redux";
import reducer from "./store/reducers";
import { createStore } from "redux";

const store = createStore(reducer);

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
    <div>
      <Provider store={store}>
        <main className={mainClass}>
          <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
          <ListTask />
          <Filters/>
          <Instruction />
        </main>
      </Provider>
    </div>
  );
}

export default App;
