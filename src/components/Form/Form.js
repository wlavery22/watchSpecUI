import './Form.css'
import { getWatches } from '../../apiCalls'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Form({  }) {

	function submitUserData(event) {
		event.preventDefault();

	
	}

	function clearInput() {

	}

	return (
		<div className='form-container'>
			<p>Enter...</p>
			<form className='main-form'>
				<input/>

				<input/>

				<input/>
				<button className="submitUserInput" onClick={submitUserData}>SUBMIT</button>
			</form>
		</div>
	)
}