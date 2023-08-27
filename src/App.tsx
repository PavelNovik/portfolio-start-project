import './App.css';

import {Header} from "./layouts/header/Header";
import {Main} from "./layouts/sections/main/Main";
import {About} from "./layouts/sections/about/About";
import {Stack} from "./layouts/sections/stack/Stack";
import {Project} from "./layouts/sections/projects/Project";


function App() {
    return (
        <div className="App">
           <Header/>
            <Main/>
            <About/>
            <Stack/>
            <Project/>
        </div>
    );
}

export default App;

