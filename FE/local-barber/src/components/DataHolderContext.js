import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';




const DataHolderContext = createContext()

export function DataProvider({children}) {
  const BASE_PATH = 'http://localhost:3001'
// const [state , setState] = useState([]);
const [logInMessage , setLogInMessage] = useState([]);
const navigate = useNavigate();
const [Barbers , setBarbers] = useState([])
const [chosenBarber , setChosenBarber] = useState('')
const [whoLogedIn , setWhoLogedIn] = useState({name: 'Dor' , phone: '0521234567'})
const state = {login: logInMessage , barbers: Barbers , logedInUser: whoLogedIn , setbarber: setBarbers , setlogedin: setWhoLogedIn , setchosenbarber: setChosenBarber , chosenbarber: chosenBarber , basePath: BASE_PATH}


console.log(chosenBarber);


  return (
    <DataHolderContext.Provider value={{state}}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {children}
          </MuiPickersUtilsProvider>
    </DataHolderContext.Provider>
  )
}

export default DataHolderContext;