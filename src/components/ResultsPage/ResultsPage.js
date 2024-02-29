import './ResultsPage.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


export default function ResultsPage({ watchByName, setWatchByName, watchesByType, setWatchesByType, watchesByPrice, setWatchesByPrice, resultsPageKey }) {
  // const [watchByName, setWatchByName] = useState('');
  // const [watchesByType, setWatchesByType] = useState([]);
  // const [watchesByPrice, setWatchesByPrice] = useState([]);
  // const [resultsPageKey, setResultsPageKey] = useState(0);

  // useEffect(() => {
  //   setWatchByName('');
  //   setWatchesByType([]);
  //   setWatchesByPrice([]);
  //   // setResultsPageKey(0);
  //  }, [resultsPageKey]); 

  function clearResults() {
    setWatchByName('');
    setWatchesByType([]);
    setWatchesByPrice([]);
	}
   
	return (
		<div className="ResultsPage">
			<h1 className='header'>Watches That Meet Your Criteria:</h1>
      {watchByName && (
         <div>
           <h2>Watch by Name:</h2>
           <p>Name: {watchByName.name}</p>
           <p>Type: {watchByName.type}</p>
           <p>Maker: {watchByName.maker}</p>
           <p>Cost: {watchByName.cost}</p>
           <p>Complications: {watchByName.complications}</p>
           <p>Features: {watchByName.features}</p>
           <p>Size: {watchByName.size}</p>
         </div>
       )}
       {watchesByType.length > 0 && (
         <div>
           <h2>Watches by Type:</h2>
           {watchesByType.map(watch => (
             <p key={watch.id}>{watch.name}</p>
           ))}
         </div>
       )}
       {watchesByPrice.length > 0 && (
         <div>
           <h2>Watches by Price:</h2>
           {watchesByPrice.map(watch => (
             <p key={watch.id}>{watch.name}</p>
           ))}
         </div>
       )}
      <Link to={`/`} className='homePageLink'>
        <button className='homePageButton' onClick={clearResults}>
          <h3>Click here to head back home!</h3>
        </button>
      </Link>
			{/* <Link to={`/`} className='homePageLink'>
				<h3>Click here to head back home!</h3>
			</Link> */}
		</div>
	)
}


 