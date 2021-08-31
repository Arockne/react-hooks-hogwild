import React, { useState } from 'react'

function HogDisplay({ name, image, handleDetails }) {
  const [hide, setHide] = useState(false)
  const hideMe = {display : (hide ? 'none' : 'contents')};
  function handleHide() {
    setHide(hide => !hide);
  }
  return (
    <div style={hideMe} className='ui card'>
      <h3>{name}</h3>
      <img src={image} alt="piggy" onClick={handleDetails} className='image'/>
      <button onClick={handleHide}>Hide Me</button>
    </div>
  )
}

export default HogDisplay