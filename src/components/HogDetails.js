import React from 'react'

function HogDetails({ name, specialty, weight, greased, highestMedal, handleDetails }) {
	return (
		<div onClick={handleDetails} className='ui eight wide column'>
			<h3>{name}</h3>
			<ul>
				<li>Specialty: {specialty}</li>
				<li>Weight: {weight} Pounds</li>
				<li>Greased: {greased ? 'Yes' : 'No'}</li>
				<li>Highest Medal Achieved: {highestMedal}</li>
			</ul>
		</div>
	)
}

export default HogDetails