import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import About from './components/pages/About';
import Award from './components/pages/Award';
import Experience from './components/pages/Experience';
import Interest from './components/pages/Interest';
import Skill from './components/pages/Skill';
import Sidebar from './components/pages/style/sidebar/Sidebar';
function App() {
  return (
    <BrowserRouter>
    <Sidebar>
        <Routes>
          <Route path= '/' element= {<About/>}/>
          <Route path= '/award' element= {<Award/>}/>
          <Route path= '/experience' element= {<Experience/>}/>
          <Route path= '/interest' element= {<Interest/>}/>
          <Route path= '/skill' element= {<Skill/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
