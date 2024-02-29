import './ResultsPage.css'
import { Link } from 'react-router-dom'


export default function ResultsPage({ watchByName, watchesByType, watchesByPrice }) {
	
	return (
		<div className="ResultsPage">
			<h1 className='header'>Watches That Meet Your Criteria:</h1>
      <p>{watchByName}</p>
			<Link to={`/`} className='homePageLink'>
				<h3>Click here to head back home!</h3>
			</Link>
		</div>
	)
}