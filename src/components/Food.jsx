import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Meal.css'

const Food = () => {

  const {state} = useLocation();
  const {nameFood, img, video, area} = state.objFood;

  return (
    <div>
      <div className='food-link'>
        <h3>{nameFood}</h3>
        <img className='food-img' src={img}/>
        <a href={video}>Click for video instruction</a>
      </div>
    </div>
  )
}

export default Food
