import React from 'react';
import { ListOfDrinks } from "../components/ListOfDrinks";
import Drink from "../components/Drink";
import "./DrinkList.css";


function DrinkList() {
  return (
    <div className="drinkList">
      <h1 className="drinkListTitle">Drinks you can mix</h1>
      <div className="listOfDrinks">
        {ListOfDrinks.map((drink, key) => {
          return (
            <Drink
              key={key}
              image={drink.image}
              name={drink.name}
              skillLevel={drink.skillLevel}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DrinkList;