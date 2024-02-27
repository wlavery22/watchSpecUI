import logo from '../../logo.svg';
import './App.css';
import { getWatches } from '../../apiCalls.js'
import { useState, useEffect } from 'react';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import ResultsPage from '../ResultsPage/ResultsPage.js';
import Form from '../Form/Form.js';


function App() {
  return (
    <div className="App">
      <header >
				<img src='/default.png' alt='OnWard Logo'/>
      </header>
			<main>
				<Routes>
					<Route path='/' element={<Form navigate = {navigate}/>}/>
					<Route path='/results' element={<ResultsPage />}/>
					<Route path='*' element={<ErrorPage/>}/>
				</Routes>
			</main>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
