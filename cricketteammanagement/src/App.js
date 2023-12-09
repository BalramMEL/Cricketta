
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home/Home.jsx';
import Registration from './components/Registration/PlayerRegistration.jsx';
import TeamOne from './components/TeamOne/TeamOne.jsx';
import Teams from './components/Teams/Teams.jsx';
import PlayerCards from './components/Registration/PlayerCards.jsx';

function App() {
  return (
    <>
      <BrowserRouter>

        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/teams' element={<Teams />}></Route>
          <Route path='/teams/csk' element={<TeamOne />}></Route>
          <Route path='/player' element={<PlayerCards />}></Route>
          
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
 
    </>
  );
}

export default App;