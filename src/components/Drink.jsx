import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Meal.css'

const Drink = () => {

    const {state} = useLocation()
    const {nameDrink, abv, description} = state.objDrink;

  return (
    <div>
        <h3>{nameDrink}</h3>
        <p>{abv}</p>
        <p>{description}</p>
    </div>
  )
}

export default Drink
