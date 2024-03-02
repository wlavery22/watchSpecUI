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

	return (
		<div className='all-watches-container'>
			{watchesCards}
		</div>
	)
}

WatchBox.propTypes = {
  watches: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     name: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired,
     maker: PropTypes.string.isRequired,
     cost: PropTypes.number.isRequired,
     complications: PropTypes.string.isRequired,
     features: PropTypes.string.isRequired,
     size: PropTypes.string.isRequired,
  })).isRequired,
 };
