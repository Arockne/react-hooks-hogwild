import React, { useState } from 'react'
import HogDetails from './HogDetails'
import HogDisplay from './HogDisplay'

function HogTile({ hog }) {
	const [showDetails, setShowDetails] = useState(false)
	const {name, image, specialty, weight, greased} = hog

	function handleDetails() {
		setShowDetails(showDetails => !showDetails)
	}
  
	return (
    showDetails 
		? 
		<HogDetails name={name} specialty={specialty} weight={weight} greased={greased} highestMedal={hog['highest medal achieved']} handleDetails={handleDetails} /> 
		: 
		<HogDisplay name={name} image={image} handleDetails={handleDetails}/>  
	)
}

export default HogTile