import logo from '../../cover.png';
import './App.css';
import getAllWatches from '../../apiCalls';
import { useState, useEffect } from 'react';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';
import WatchBox from '../WatchBox/WatchBox.js';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import ResultsPage from '../ResultsPage/ResultsPage.js';
import Form from '../Form/Form.js';


export default function App() {
	const [watches, setWatches] = useState([]);
  const [error, setError] = useState(false);
	const navigate = useNavigate();

  useEffect(() => {
    getAllWatches()
      .then(data => setWatches(data.watches))
      .catch(error => setError(true))
  },[])

  if (error) {
    return (
      <h1>ERROR</h1>
    )
  }

  return (
    <div className="App">
      <header >
				<img src='src/cover.png' alt='Watch Collector Logo'/>
      </header>
      {!watches.length && <h2>No watches yet -- find some!</h2>}
			<main>
				<Routes>
					<Route path='/' element={
            <>
              <Form navigate={navigate} /> 
              <WatchBox watches={watches} />
            </>
          }/>
					<Route path='/results' element={<ResultsPage />}/>
					<Route path='*' element={<ErrorPage/>}/>
				</Routes>
			</main>
    </div>

  );
}
// you need to write the fetch call, the function that wraps it, the useEffect that calls it
// you need to make sure all files have the import statements they need, and the props they need, in the return statement and in the arguments of the function/component
// if you want the conditional rendering to only work on the homepage, as opposed to on any page, change to below:
{/* <Route path='/' element={
  <>
    <Form navigate={navigate} />  
    <WatchBox watches={watches} />
    {!watches.length && <h2>No watches yet -- find some!</h2>}
  </>
}/> */}


