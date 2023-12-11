
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home/Home.jsx';
import Registration from './components/Registration/PlayerRegistration.jsx';

import PlayerCards from './components/Registration/PlayerCards.jsx';
import { News } from './components/News/News.jsx';
import { PointsTable } from './components/pointsTable/PointsTable.jsx';
import { Teams } from './components/Teams/Teams.jsx';
import PlayerUpdateForm from './components/Registration/PlayerUpdateForm.jsx';



function App() {    

  return (
    <>
      <BrowserRouter>

        <NavigationBar />
        <Routes>
         <Route path='/' element={<Home />}></Route>          
          
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/teams' element={<Teams />}></Route>
          {/* <Route path='/teams/csk' element={<TeamOne />}></Route> */}
          <Route path='/player' element={<PlayerCards />}></Route>
          <Route path='/player/:_id' element={<PlayerUpdateForm />}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/pointsTable' element={<PointsTable/>}></Route>          
          
        </Routes>
      </BrowserRouter>
 
    </>
  );
}

export default App;
