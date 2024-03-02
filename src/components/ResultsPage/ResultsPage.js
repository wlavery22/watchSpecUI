import './ResultsPage.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export default function ResultsPage({ watchByName, setWatchByName, watchesByType, setWatchesByType, watchesByPrice, setWatchesByPrice }) {

  function clearResults() {
    setWatchByName('');
    setWatchesByType([]);
    setWatchesByPrice([]);
	}

  const noResults = !watchByName && watchesByType.length === 0 && watchesByPrice.length === 0;

	return (
		<div className="results-page">
			<h1 className='header'>Watches That Meet Your Criteria:</h1>
      <div className='all-results-container'>
        {noResults && (
          <div className="no-results">
            <p>There are no watches that meet your criteria, please try again.</p>
          </div>
        )}
        {watchByName && (
          <div className="watch-by-name">
            <h2>Watch by Name:</h2>
            <p>{watchByName.name}</p>
            <p>Type: {watchByName.type}</p>
            <p>Maker: {watchByName.maker}</p>
            <p>Cost: ${watchByName.cost}</p>
            <p>Complications: {watchByName.complications}</p>
            <p>Features: {watchByName.features}</p>
            <p>Size: {watchByName.size}</p>
          </div>
        )}
        {watchesByType.length > 0 && (
          <div className="watches-by-type">
            <h2>Watches by Type:</h2>
            {watchesByType.map(watch => (
              <p key={watch.id}>{watch.name}</p>
            ))}
          </div>
        )}
        {watchesByPrice.length > 0 && (
          <div className="watches-by-price">
            <h2>Watches by Price:</h2>
            {watchesByPrice.map(watch => (
              <p key={watch.id}>{watch.name}</p>
            ))}
          </div>
        )}
      </div>
      <Link to={`/`} className='home-page-link'>
        <button className='home-page-button' onClick={clearResults}>
          <h3>Click here to head back home!</h3>
        </button>
      </Link>
		</div>
	)
}

ResultsPage.propTypes = {
  watchByName: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    maker: PropTypes.string,
    cost: PropTypes.number,
    complications: PropTypes.string,
    features: PropTypes.string,
    size: PropTypes.string,
  }),
  setWatchByName: PropTypes.func.isRequired,
  watchesByType: PropTypes.arrayOf(PropTypes.string).isRequired,
  setWatchesByType: PropTypes.func.isRequired,
  watchesByPrice: PropTypes.arrayOf(PropTypes.string).isRequired,
  setWatchesByPrice: PropTypes.func.isRequired
};
 