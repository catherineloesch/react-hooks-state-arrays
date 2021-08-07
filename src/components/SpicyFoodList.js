import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  const foodsToDisplay = foods.filter(food => (filterBy === "All") ? true : food.cuisine === filterBy)

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => (handleLiClick(food.id))}>
      {food.name} | Cuisine: {food.cuisine} | Heat Level: {food.heatLevel}
    </li>
  ))

  function handleAddFood() {
    const newFood = getNewSpicyFood();    
    const newFoodList = [...foods, newFood]
    setFoods(newFoodList)
  }

  function handleLiClick(id) {
    // const newFoodList = foods.filter((food) => (food.id !== id))
    const newFoodList = [...foods]
    newFoodList[id-1]["heatLevel"] += 1
    setFoods(newFoodList)
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value)    
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button><p></p>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> 
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
