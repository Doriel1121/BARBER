import './App.css';
import {useNavigate, Route , Routes , useLocation, Navigate} from 'react-router-dom'
import FirstPage from './components/Pages/FirstPage';
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/LoginPage';
import { useState , useEffect, useContext } from 'react';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Schedule from './components/Schedule';
import {DataProvider} from './components/DataHolderContext'
import BarbersPage from './components/Pages/BarbersPage';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import Navbar from './components/Navbar';
import AboutUsPage from './components/Pages/AboutUsPage';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");
  const [value, setValue] = useState('recents');

  useEffect(() => {
    console.count('number:');
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);
  const handleChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    navigate(newValue);
    setValue(newValue);
  };


  return (
    <DataProvider>
      <div className="app">
        <Navbar/>

        <div       
          className={`${transitionStage} AppWrapper`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              console.count('amount');
              setTransistionStage("fadeIn");
              setDisplayLocation(location);
            }
          }}>
          <Routes location={displayLocation}>
            <Route path='/' element = {<FirstPage/>}/>
            <Route path='/login' element = {<LoginPage/>}/>
            <Route path='/home' element = {<HomePage/>}/>
            <Route path='/barberSchedule' element = {<Schedule/>}/>
            <Route path='/allBarbers' element = {<BarbersPage/>}/>
            <Route path='/about' element = {<AboutUsPage/>}/>
          </Routes>
          </div>
      </div>
      {/* <BottomNavigation className='navigationPanel' sx={{ width: "100%" }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Barbers"
          value="allBarbers"
          icon={<ShareOutlinedIcon />}
        />
        <BottomNavigationAction
          label="About"
          value="about"
          icon={<WorkHistoryOutlinedIcon />}
        /> */}
        {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
      {/* </BottomNavigation> */}
      
    </DataProvider>
    
  );
}

export default App;
