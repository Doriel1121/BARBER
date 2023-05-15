import axios from 'axios'
import React, { useState , useEffect } from 'react'

const useFetch = () => {
    const [url , setUrl] = useState()
    const [status, setStatus] = useState(false);
    // const [type, setType] = useState('get');
    const [data, setData] = useState([]);
    // const [payload, setPayload] = useState([]);
    const [isLoading , setIsLoading] = useState(undefined);
    const [error , setError] = useState(undefined);

    const fetchData = (URL , type='get' , payload) =>{
        console.log(type);
        setIsLoading(true);
        console.log(data);
        console.log(type);
        if (type === 'post') {
            console.log('post indeed');
            // if (URL) {
                axios.post(URL,payload)
                .then((res) => {
                    console.log(res);
                    setIsLoading(false);
                    setData(res)
                    setStatus(true)
                }).catch((err) => {
                    setIsLoading(false);
                    setError(true);
                    console.log(err);
                    setStatus(false)
                })
            // }
            
        } else{
            console.log('get indeed');
            if (URL) {
                axios.get(URL)
                .then((res) => {
                    console.log(res);
                    setIsLoading(false);
                    setData(res)
                    setStatus(res.data)
                    // setUrl('')
                }).catch((err) => {
                    console.log(err);
                    setIsLoading(false);
                    setError(true);
                    // setUrl('')
                    console.log(err);
                })
            }
        }
    }

    return ([status ,data , setUrl , isLoading , error , fetchData])
}
export default useFetch;
