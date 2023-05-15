import React, { useContext, useEffect, useState } from 'react'
import '../styles/LoginPage.css'
import LOGO from '../resources/logo1.png'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Button } from '@mui/material';
import  DataHolderContext  from './DataHolderContext';
import useFetch from './Hooks/useFetch'
import { Link, useNavigate } from 'react-router-dom'




export default function LoginPage() {
  const navigate = useNavigate();
  const [isAuth , setIsAuth] =  useState(false);
  const [number , setNumber] = useState('')
  const [name , setName] = useState('')
  const [message , setMessage] = useState('');
  const {getData} = useContext(DataHolderContext);
  const {state} = useContext(DataHolderContext);
  const GET_USERS_URL = '/getUserInfo';
  const URL = number ?  `${GET_USERS_URL}/${number}/${name}` : null;
  const  [status ,  data , setUrl , isLoading , error , fetchData] = useFetch(URL);


  function validateUser() {
    console.log(state.basePath);
    console.log(URL);
    setUrl(URL);
    fetchData(`${state.basePath}/getUserInfo/${number}/${name}`)
  }

  useEffect(() => {
    console.log(data);
    if (status) {
      console.log(status);
      state.setlogedin({name , number})
      console.log(state.logedInUser);
    navigate('/home');
    }
  },[status])
  return (
    <div className='loginWrapper' >
      {/* <div className='header'>
        <img className='logo' src={LOGO} alt='pic'/>
      </div> */}
      <div className='formWrapper'>
        <FormControl className='formElement' variant="standard">
          <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
            <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
            <TextField color='warning' onChange={(e) => setName(e.target.value)} className='input' id="input-with-sx" label="Name" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LocalPhoneIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
            <TextField color='warning' onChange={(e) => setNumber(e.target.value)} className='input' id="input-with-sx" label="Phonenumber" variant="standard" />
          </Box>
           <div className='signInbtnWrapper'><Button onClick={() => validateUser()} className='formButton'>LOG IN </Button></div>
        </FormControl>
      </div>
      {state.login ? <span>{state.login}</span> : null}
    </div>
  )
}
