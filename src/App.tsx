import './App.css';
import React, {useState} from "react";

import {Header} from "./layouts/header/Header";
import {Main} from "./layouts/sections/main/Main";
import {About} from "./layouts/sections/about/About";
import {Stack} from "./layouts/sections/stack/Stack";
import {Project} from "./layouts/sections/projects/Project";
import {Contact} from "./layouts/sections/contact/Contact";
import {Footer} from "./layouts/footer/Footer";


function App() {
    const [theme, setTheme] = useState('light');

    const changeThemeHandler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        console.log(theme);
    }


    return (
        <div className="App">




            <Header onChange={changeThemeHandler}/>
            <Main/>
            <About/>
            <Stack/>
            <Project/>
            <Contact/>
            <Footer/>


        </div>
    );
}


export default App;

