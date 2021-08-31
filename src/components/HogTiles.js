import React, { useState } from 'react'
import HogTile from './HogTile'

function HogTiles({ hogs }) {
  const [isGreased, setIsGreased] = useState(true)
  const [sortBy, setSortBy] = useState('');
  const buttonBackground = {background: (isGreased ? 'pink' : 'white')}
  
  const hogList = hogs.filter(({greased}) => isGreased ? greased : true).sort(sortPigs)

  function sortPigs(pigA, pigB) {
    if (pigA[sortBy] < pigB[sortBy]) {
      return -1;
    }
    if (pigA[sortBy] > pigB[sortBy]) {
      return 1;
    }
    return 0;
  }

  function handleGreasedPig() {
    setIsGreased(isGreased => !isGreased)
  }

  return (
		<div>
      <button style={buttonBackground} onClick={handleGreasedPig}>Greased</button>
      <label htmlFor='hog-sort'> Sort By: </label>
      <select id='hog-sort' value={sortBy} onChange={event => setSortBy(event.target.value)}>
        <option value=''>--</option>
        <option value='name'>Name</option>
        <option value='weight'>Weight</option>
      </select>
      <div>
			{hogList.map(hog => <HogTile key={hog.name} hog={hog} />)}
      </div>
		</div>
	)
}

export default HogTiles