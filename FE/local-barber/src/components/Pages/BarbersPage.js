import React, { useContext, useEffect , useState } from 'react'
import BarberCard from '../BarberCard';
import '../../styles/BarbersPage.css';
import  DataHolderContext  from '../DataHolderContext';
import useFetch from '../Hooks/useFetch'
import Schedule from '../Schedule';
import { CircularProgress } from '@material-ui/core';
import Error from '../Error';
import Loading from '../Loading';


export default function BarbersPage() {


  
  const {getData} = useContext(DataHolderContext);
  const {state} = useContext(DataHolderContext);
  const [barber , setBarber] = useState('');
  const [status , data , setUrl , isLoading , error , fetchData ] = useFetch(`${state.basePath}/getBarbersList`);


  useEffect(() =>{
    console.log(data);
    console.log(state);
    setUrl(`${state.basePath}/getBarbersList`)
    fetchData(`${state.basePath}/getBarbersList` , 'get')
  }, [])

  if (isLoading) return <div><Loading/></div>
  if (error) return <Error/>

  

console.log(barber);
  return (
    <div>
      <div className='createOrderFlowWrapper'>
      <div className='barbersTitleWrapper'><h4 className='title'>Choose barber</h4></div>
        <div className='allBarbers'>  
          {data?.data?.map((barber , key) => {
            return <div key={key} className='barberCardWrapper'> 
            <BarberCard data = {barber} isChosen = {state.chosenbarber ? state.chosenbarber : undefined}/> 
            </div>
          })}
        </div>
          {state.chosenbarber ? <Schedule/> : null}
        </div>
    </div>
  )
}
