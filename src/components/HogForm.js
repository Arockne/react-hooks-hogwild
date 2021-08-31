import React, { useState } from 'react'

function HogForm({ addHog }) {
  const [formData, setFormData] = useState(
    {
      name: '',
      specialty: '',
      weight: '',
      image: '',
      greased: false,
      'highest medal achieved': ''
    }
  )

  function handleFormData(event) {
    let {name, value} = event.target;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }
    setFormData({ ...formData, [name]: value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    addHog(formData);

    setFormData({
      name: '',
      specialty: '',
      weight: '',
      image: '',
      greased: false,
      'highest medal achieved': ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input 
      id='name' 
      name='name' 
      type='text' 
      value={formData.name}
      onChange={handleFormData}
      />
      <label htmlFor='specialty'> Specialty: </label>
      <input 
      id='specialty' 
      name='specialty' 
      type='text'
      value={formData.specialty}
      onChange={handleFormData}
      />
      <br />
      <label htmlFor='weight'>Weight: </label>
      <input 
      id='weight' 
      name='weight' 
      type='number' 
      value={formData.weight}
      onChange={handleFormData}
      />
      <label htmlFor='image'> Image: </label>
      <input 
      id='image' 
      name='image' 
      type='url' 
      value={formData.image}
      onChange={handleFormData}
      />
      <br />
      <label htmlFor='highestMedal'>Highest Medal Achieved: </label>
      <input 
      id='highestMedal' 
      name='highest medal achieved' 
      type='text'
      value={formData['highest medal achieved']}
      onChange={handleFormData}
      />
      <input 
      id='greased' 
      name='greased' 
      type='checkbox'
      checked={formData.greased}
      onChange={handleFormData}
      />
      <label htmlFor='greased'>Greased?</label>
      <br />
      <input type='submit'/>
    </form>
  ) 
}

export default HogForm