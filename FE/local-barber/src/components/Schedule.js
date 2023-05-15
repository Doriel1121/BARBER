import React, { useEffect , useState , useContext } from 'react'
import { DatePicker } from "@material-ui/pickers";
import Navbar from './Navbar';
import { Button } from "@material-ui/core";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useFetch from './Hooks/useFetch';
import  DataHolderContext  from '../components/DataHolderContext';
import '../styles/Schedule.css'
import { setDate } from 'date-fns';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:'15px',
  p: 4,
};
const btn = {
  color: 'yellow',
}


export default function Schedule(props) {
  // const [date, changeDate] = useState(new Date());
  const [chosenHour , setChosenHour] = useState('')
  const [open, setOpen] = useState(false);
  const [path , setPath] = useState('');
  const [chosenDay , setChosenDay] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [timeList , setTimeList] = useState([]);
  const {state} = useContext(DataHolderContext);
  let FETCH_DATA = `${state.basePath}/${path}`;
  // const [link , setLink] = useState(FETCH_DATA);
  // const [hour , setHour] = useState('');
  const [barber , setBarber] = useState('');
  const [status ,data , setUrl , isLoading , error , fetchData] = useFetch();


  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  // const BARBER_AVALIABILITY = `${state.basePath}/getBarberSchedule`;

  useEffect(() => {
    if (barber && barber !== state.chosenbarber) {
      openBarberScheduleforDat(selected)
    }
    setBarber(state.chosenbarber)

    console.log('here' + path);
  },[state.chosenbarber])


  if (!isLoading) {
    // resetFetch();
    console.log(data);
  }

  function checkBarberFreeDates(day) {
    // resetFetch();
    const Payload = {
      phone: state.logedInUser.number,
      barberId: state.chosenbarber,
      Date: day
    }
    
    setPath('getBarberSchedule');
    fetchData(`${state.basePath}/getBarberSchedule` , 'post',  Payload)
  }

function openBarberScheduleforDat(e) {
  setSelected(e)
  const chosenTime = new Date(e);
  const year = new Date(e).getFullYear();
  const month = new Date(e).getMonth() + 1;
  const day = new Date(e).getDate();
  console.log(`${month}/${day}/${year}`);
  setChosenDay(`${month}/${day}/${year}`)
  checkBarberFreeDates(`${month}/${day}/${year}`);

  // handleOpen();
  }

  function resetFetch() {
    // setPayload('');
    // setType('');
  }

  function chooseDate(time) {
    console.log('im in here');
    console.log(time);
    const payload = {
      date: chosenDay,
      hour: time,
      name: state.logedInUser.name,
      phone: state.logedInUser.number,
      barberId: state.chosenbarber
    }
    setPath('setBarberSchedule')
    // setUrl(FETCH_DATA);
    // setPayload(payload);
    // setType('post');
    fetchData(`${state.basePath}/setBarberSchedule` , 'post',  payload)
  }
  function orderSelectedTime(time) {
    handleOpen();
    console.log(`Order time: ${time}`);
    setChosenHour(time + ' ' + chosenDay)
    chooseDate(time);
    // Todo- add popup message of "you have scheduled an appointment on date and time"
  }

  return (
    <div className='scheduleWrapper'>
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={(e) => openBarberScheduleforDat(e)}
          footer={footer}
        />
        {/* {console.log(data.length , isLoading)} */}

        {data.length === 0 ? null : isLoading ? <CircularProgress /> : 
        <div className="optionsWrapper">

          <p className='optionsTitle'>Choose Hour</p>
          <div className='timesOptions'>
          {data?.data?.map((time , index) => <Button key={index} onClick={() => orderSelectedTime(time)} className={`timeOption ${time === chosenHour ? 'selected' : ''}`}>{time}</Button>)}
          </div>
        </div>

        }
        {chosenHour ? 
        <Modal
        classes='modal'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='box' sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Great!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
            See you on {chosenDay}
          </Typography>
          <div className='modalFooter'>
          <Link onClick={() => resetFetch()} to = '/home'><Button sx={style.btn} className="modalButton">Close</Button></Link>
          </div>
        </Box>
      </Modal>: null}
        
       
    </div>
  )
}
