import {React, useState} from "react";
import './App.css';
import axios from "axios";

export default function App() {

  const [address, setAddress] = useState('192.168.1.106')
  const [message, setMessage] = useState('')
  const [output, setOutput] = useState('')

  const sendMessage = () => {
    const url = 'http://' + address + ':8080/?message=' + message
    console.log(url);
      axios.post(url)
        .then(response => {
          console.log(response);
          setOutput(response.data['message'])
        })
        .catch(error => {
          setOutput('Error: ', error)
        })
  }

  return (
    <div className='app'>
      <input className='input' placeholder='Enter IP address' value={address} onInput={(event) => {setAddress(event.target.value)}}/>
      <input className='input' placeholder='Enter message' value={message} onInput={(event) => {setMessage(event.target.value)}}/>

      <button className='button' onClick={sendMessage} >Send</button>
      <div className='output'>{output}</div>
    </div>
  );
}