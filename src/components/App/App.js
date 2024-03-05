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
  const [watchByName, setWatchByName] = useState("");
  const [watchesByType, setWatchesByType] = useState([]);
  const [watchesByPrice, setWatchesByPrice] = useState([]);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    getAllWatches()
    .then(data => setWatches(data.watches))
    .catch(error => {
      if (error.message.includes('Server Error')) {
        setServerError(true); 
      } else {
        setError(true);
      }
    });
  }, []);

  if (serverError) {
    return (
      <div>
        <h1>Server Error</h1>
        <p className="server-error-message">We're having trouble getting data. Please try again later.</p>
      </div>
    );
  }

  if (error) {
    return <h1>ERROR</h1>;
  }
  
  function updateName(name) {
		setName(name)
    findByName(name)
	}

	function updatePrice(price) {
		setPrice(price)
    filterByPrice(price)
	}

	function updateType(type) {
		setType(type)
    filterByType(type)
	}

  function findByName(name) {
    const usersWatchByName = watches.find(watch => {
       return watch.name === name;
    });
    return setWatchByName(usersWatchByName);
   }

  function filterByPrice(price) {
    const userswatchesByPrice = watches.filter(watch => {
      return watch.cost === Number(price);
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
          <Route path='/results' element={<ResultsPage watchByName={watchByName} setWatchByName={setWatchByName} watchesByType={watchesByType} setWatchesByType={setWatchesByType} watchesByPrice={watchesByPrice} setWatchesByPrice={setWatchesByPrice} />} />
					<Route path='*' element={<ErrorPage/>}/>
				</Routes>
			</main>
    </div>
  );
}
