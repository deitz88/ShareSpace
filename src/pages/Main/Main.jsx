import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Main.css';
import NavBar from '../../components/NavBar/NavBar';

export default function Main({user, handleLogout}){
    return (
        <>
        <NavBar user={user} handleLogout={handleLogout}/>
        <h1>feed</h1>
        </>
    )
}