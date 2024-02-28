import './Card.css'

const Card = ({ name, type, id, maker, cost, complications, features, size  }) => {

  return (
    <div className='card'>
      <p>{name}</p>
      <p>{type}</p>
      <p>{maker}</p>
      <p>{cost}</p>
      <p>{complications}</p>
      <p>{features}</p>
      <p>{size}</p>
    </div>
  )
}

export default Card;

//receiving props here from WatchBox.js, from the '.all-watches-container' component 

// name, type, id, maker, cost, complications, features, size