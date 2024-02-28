import './WatchBox.css';
import Card from '../Card/Card';
import { useEffect , useState} from 'react';
import PropTypes from 'prop-types';

export default function WatchBox( { watches } ){

	const watchesCards = watches.map(watch => {

		return (
			<Card 
				id={watch.id}
				key={watch.id}
				name={watch.name}
				type={watch.type}
				maker={watch.maker}
        cost={watch.cost}
        complications={watch.complications}
        features={watch.features}
        size={watch.size}
			/>
		)
	})
  // name, type, id, maker, cost, complications, features, size
	return (
		<div className='all-watches-container'>
			{watchesCards}
		</div>
	)
}

// WatchBox.propTypes = {
//   watches: PropTypes.array.isRequired,
//   updateWatchId: PropTypes.func.isRequired,
//   updateWatchInfo: PropTypes.func.isRequired,
//   handleError: PropTypes.func.isRequired,
// }