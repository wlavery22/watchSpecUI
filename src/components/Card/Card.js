import './Card.css'
import PropTypes from 'prop-types';

const Card = ({ name, type, id, maker, cost, complications, features, size  }) => {

  return (
    <div className='card'>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Maker: {maker}</p>
      <p>Cost: ${cost}</p>
      <p>Complications: {complications}</p>
      <p>Features: {features}</p>
      <p>Size: {size}</p>
    </div>
  )
}

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  maker: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  complications: PropTypes.string.isRequired,
  features: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
 };