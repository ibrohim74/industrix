import React from 'react'
import HeaderTitle from './Components/HeaderTitle/HeaderTitle'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Our from "./Components/Our/Our";
import Test from "./Components/Test/Test";
import How from "./Components/How/How";
import Number from "./Components/Number/Number"
import Talk_about from "./Components/talk_about/talk_about";
import Discover from "./Components/Discover/Discover";
import Footer from "./Components/footer/footer";
export default function App() {
    return (
        <div>
            <Header/>
            <HeaderTitle/>
            <About/>
            <Our/>
            <Test/>
            <How/>
            <Number/>
            <Talk_about/>
            <Discover/>
            <Footer/>
        </div>
    )
}
