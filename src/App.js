import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Account from './components/Account';
import {ToastContainer} from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './Reducers/userSlice';

function App() {
  const dispatch = useDispatch(); 
  useEffect(()=>{
    if(sessionStorage.getItem("user") !== undefined)
    {
      dispatch(setUser(JSON.parse(sessionStorage.getItem("user"))));
    }
      },[])
  return (
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
      <ToastContainer/>
      </>
    
  );
}

export default App;
