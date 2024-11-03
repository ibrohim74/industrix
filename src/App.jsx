import React from 'react'
import HeaderTitle from './Components/HeaderTitle/HeaderTitle'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Our_servise from "./Components/our_servise/our_servise";

export default function App() {
    return (
        <div>
            <Header/>
            <HeaderTitle/>
            <About/>
            <Our_servise/>
        </div>
    )
}
