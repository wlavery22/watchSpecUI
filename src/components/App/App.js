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
  const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [type, setType] = useState('');

  const [watchByName, setWatchByName] = useState('');
  const [watchesByType, setWatchesByType] = useState([]);
  const [watchesByPrice, setWatchesByPrice] = useState([]);


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
  
  function updateName(name) {
		setName(name)
    console.log(name)
    findByName(name)
	}

	function updatePrice(price) {
		setPrice(price)
    console.log(price)
    filterByPrice(price)
	}

	function updateType(type) {
		setType(type)
    console.log(type)
    filterByType(type)
	}

  function findByName(name) {
    const usersWatchByName = watches.find(watch => {
       return watch.name === name;
    });
    return setWatchByName(usersWatchByName);
   }
   console.log(watchByName)

  function filterByPrice(price) {
    const userswatchesByPrice = watches.filter(watch => {
      return watch.price === price;
    })
    return setWatchesByPrice(userswatchesByPrice);
  }

  function filterByType(type) {
    const userswatchesByType = watches.filter(watch => {
      return watch.type === type;
    })
    return setWatchesByType(userswatchesByType);
  }

  return (
    <div className="App">
      <header >
				<img src={logo} alt="Logo" />
      </header>
			<main>
				<Routes>
					<Route path='/' element={
            <>
              <Form navigate={navigate} updateName={updateName} updatePrice={updatePrice} updateType={updateType} /> 
              <WatchBox watches={watches} />
              {!watches.length && <h2>No watches yet -- find some!</h2>}
            </>
          }/>
          <Route path='/results' element={<ResultsPage watchByName={watchByName} watchesByType={watchesByType} watchesByPrice={watchesByPrice} />} />

					<Route path='*' element={<ErrorPage/>}/>
				</Routes>
			</main>
    </div>
  );
}

// you need to make sure all files have the import statements they need, and the props they need, in the return statement and in the arguments of the function/component

