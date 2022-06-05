import logo from './logo.svg';
import './App.css';

import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const URL = "https://9q2xys304l.execute-api.ap-southeast-2.amazonaws.com/dev"
const path = '/getData'; 

function App() {

  function getData(e){
    API.get(URL+path)
    .then(response =>{
      console.log(response)
    })
  }
  
  return (
    <>
    <h1>Company Listing</h1>
    <button onClick={getData}>Get Data</button>
    </>
  );
}

export default App;
