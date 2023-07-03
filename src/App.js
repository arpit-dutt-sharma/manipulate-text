
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import React, {useState} from 'react';
// import { Routes ,Route } from 'react-router-dom';
// import {BrowserRouter as Router,
//   Switch, 
//   Route, 
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
  //   document.title = "TextUtils - Dark Mode";
  //   setInterval(() => {
  //     document.title = "TextUtils  is Amazing";
  // }, 2000);
  // setInterval(() => {
  //     document.title = "Install TextUtils";
  // }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    // document.title = "TextUtils - Light Mode";
  }
}
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    {/* <h1>Arpit</h1> */}
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
