import React, { useEffect, useState } from 'react'
import { ApiGet } from '../utils/apiFetcher';
import '../styles/Meal.css'
import {useNavigate} from 'react-router-dom'

const Meals = () => {

    const initalstate = {
        foodDTO: {
            meals: [{}]
        },
        drinkDTO:{}
    }

const [meal, setMeals] = useState(initalstate);
const [showForm, setShowForm] = useState(false);
const navigate = useNavigate();

useEffect(() => {

}, [])

function sendFood(event) {
    event.preventDefault();
    const objFood = {
    nameFood: meal.foodDTO.meals[0].strMeal,
    img: meal.foodDTO.meals[0].strMealThumb,
    area: meal.foodDTO.meals[0].strArea,
    video: meal.foodDTO.meals[0].strYoutube
}
    navigate("/food", {state: {objFood}});
}

function sendDrink(event) {
    event.preventDefault();
    const objDrink = {
    nameDrink: meal.drinkDTO.name,
    abv: meal.drinkDTO.abv,
    description: meal.drinkDTO
}
    navigate("/drink", {state: {objDrink}});
}

const newMeal = () => {
    ApiGet("/meal/random", setMeals)
}


const onClick = () => {
    setShowForm(!showForm)
    newMeal()
}

  return (
    <div>
        <div>
            <h3>Suprise Meal & Drink</h3>
            {!showForm &&
            <button className='show-meal-button' onClick={onClick}>Suprise me!</button>
            }
        </div>
    {showForm &&
    <div>
    <button className='next-meal-button' onClick={newMeal}>New Meal</button>
    <div className='container'>
        <div className='drink'>
            <h3>{meal.drinkDTO.name}</h3>
            <p>{meal.drinkDTO.description}</p>
            <p>{meal.drinkDTO.abv}</p>
        </div>
        <div className='food'>
            <h3>{meal.foodDTO.meals[0].strMeal}</h3>
            <img className='food-img' src={meal.foodDTO.meals[0].strMealThumb}  />
            <div className='show-recipe'>
            <button type='button' onClick={sendFood}>Recipe</button>
            </div>
        </div>
    </div>
    </div>
    }
    </div>
  )
}

export default Meals
