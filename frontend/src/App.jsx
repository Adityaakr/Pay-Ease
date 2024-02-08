import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';



function App() {
    return (
        <>
        <BrowserRouter>
        <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>} />
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
