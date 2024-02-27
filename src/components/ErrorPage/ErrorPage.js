import { Link } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage() {
	return (
		<div className='errorPage'>
			<h2>Page not Found</h2>
			<Link to="/">
				<h3 >Click here to go back!</h3>
			</Link>
		</div>
	)
}