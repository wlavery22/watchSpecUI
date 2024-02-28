import './Form.css'
import { getWatches } from '../../apiCalls'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Form({ navigate, updateName, updatePrice, updateType }) {
  const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [type, setType] = useState('');

	function submitName(event) {
		event.preventDefault();

    updateName(name)

    clearInput();
    navigate('/results');
	}

  function submitPrice(event) {
		event.preventDefault();

    updatePrice(price)

    clearInput();
    navigate('/results');
	}

  function submitType(event) {
		event.preventDefault();

    updateType(type)

    clearInput();
    navigate('/results');
	}

	function clearInput() {
    setName('');
		setPrice(0);
		setType('');
	}

	return (
		<div className='form-container'>
			<p>Search Watches by Name, Price, OR Type</p>
			<form className='main-form'>
				<input
          type='text'
					placeholder='Name'
					name='name'
					value={name}
					onChange={event => setName(event.target.value)}
        />
        <button className="submitUserName" onClick={submitName}>SUBMIT</button>
				<input
          type='number'
					placeholder='Price'
					name='price'
					value={price}
					onChange={event => setPrice(event.target.value)}
        />
        <button className="submitUserPrice" onClick={submitPrice}>SUBMIT</button>
				<input
          type='text'
					placeholder='Type'
					name='type'
					value={type}
					onChange={event => setType(event.target.value)}
        />
				<button className="submitUserType" onClick={submitType}>SUBMIT</button>
			</form>
		</div>
	)
}