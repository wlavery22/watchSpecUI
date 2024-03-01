import './Card.css'

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
