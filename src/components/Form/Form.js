import './Form.css'
import { getWatches } from '../../apiCalls'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Form({ navigate, updateName, updatePrice, updateType }) {
  const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [type, setType] = useState('');
  const [nameError, setNameError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [typeError, setTypeError] = useState('');

  function submitName(event) {
    event.preventDefault();
    if (!name) {
       setNameError('Please enter a name.');
       return;
    }
    updateName(name);
    clearInput();
    navigate('/results');
  }

   function submitPrice(event) {
    event.preventDefault();
    if (!price) {
       setPriceError('Please enter a price.');
       return;
    }
    updatePrice(price);
    clearInput();
    navigate('/results');
  }

   function submitType(event) {
    event.preventDefault();
    if (!type) {
       setTypeError('Please enter a type.');
       return;
    }
    updateType(type);
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
			<p className='form-container-title'>Search Watches by Name, Price, OR Type</p>

			<form className='main-form'>
				<input
          type='text'
					placeholder='Name'
					name='name'
					value={name}
					onChange={event => {
            setName(event.target.value);
            setNameError('');
          }}
        />
        <button className="submitUserName" onClick={submitName}>SUBMIT</button>
        {nameError && <p className="error-message">{nameError}</p>}

				<input
          type='number'
					placeholder='Price'
					name='price'
					value={price}
					onChange={event => {
            setPrice(Number(event.target.value));
            setPriceError('');
          }}
        />
        <button className="submitUserPrice" onClick={submitPrice}>SUBMIT</button>
        {priceError && <p className="error-message">{priceError}</p>}

				<input
          type='text'
					placeholder='Type'
					name='type'
					value={type}
					onChange={event => {
            setType(event.target.value);
            setTypeError('');
          }}
        />
				<button className="submitUserType" onClick={submitType}>SUBMIT</button>
        {typeError && <p className="error-message">{typeError}</p>}
			</form>
		</div>
	)
}

Form.propTypes = {
  navigate: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
  updatePrice: PropTypes.func.isRequired,
  updateType: PropTypes.func.isRequired,
 };