import './ResultsPage.css'
import { Link } from 'react-router-dom'


export default function ResultsPage({ watchByName, watchesByType, watchesByPrice }) {
	
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
           {/* Render other properties of watchByName similarly */}
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
				<h3>Click here to head back home!</h3>
			</Link>
		</div>
	)
}

//   return (
//      <div className="ResultsPage">
//        <h1 className='header'>Watches That Meet Your Criteria:</h1>
      //  {watchByName && (
      //    <div>
      //      <h2>Watch by Name:</h2>
      //      <p>{watchByName.name}</p>
      //      {/* Render other properties of watchByName similarly */}
      //    </div>
      //  )}
      //  {watchesByType.length > 0 && (
      //    <div>
      //      <h2>Watches by Type:</h2>
      //      {watchesByType.map(watch => (
      //        <p key={watch.id}>{watch.name}</p>
      //      ))}
      //    </div>
      //  )}
      //  {watchesByPrice.length > 0 && (
      //    <div>
      //      <h2>Watches by Price:</h2>
      //      {watchesByPrice.map(watch => (
      //        <p key={watch.id}>{watch.name}</p>
      //      ))}
      //    </div>
      //  )}
//        <Link to={`/`} className='homePageLink'>
//          <h3>Click here to head back home!</h3>
//        </Link>
//      </div>
//   );
//  }
 