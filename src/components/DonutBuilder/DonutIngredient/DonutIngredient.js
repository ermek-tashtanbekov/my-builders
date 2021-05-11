import React from 'react'

import red from '../../../img/red.svg'
import blue from '../../../img/blue.svg'
import brown from '../../../img/brown.svg'
import black from '../../../img/black.svg'
import pink from '../../../img/pink.svg'
import violet from '../../../img/violet.svg'
import classes from './DonutIngredient.module.css'


const DonutIngredient = ({type, fixed}) => {
    const types = {
        red: {
          backgroundImage: `url(${red}) `,
          width: "60px",
          height: "60px",
        },
        blue: {
          backgroundImage: `url(${blue})`,
          width: "60px",
          height: "60px"
        },
        black: {
          backgroundImage: `url(${black})`,
          width: "60px",
          height: "60px",
          backgroundSize: "cover"
        },
        brown: {
          backgroundImage: `url(${brown})`,
          backgroundSize: "cover",
          width: "60px",
          height: "60px"
        },
        violet: {
          backgroundImage: `url(${violet})`,
          width: "60px",
          backgroundSize: "cover",
          height: "60px"
        },
        pink: {
          backgroundImage: `url(${pink})`,
          backgroundSize: "cover",
          width: "60px",
          height: "60px"
        },
    
    
      }
      function getPosition(ingredientWidth) {
        const dounutDiameter = 400;
        const dounutRadius = dounutDiameter / 2;
        const ingredientRadius = parseInt(ingredientWidth) / 2;
    
        const ingredientTop = Math.round(Math.random() * dounutDiameter);
        const ingredientLeft = Math.round(Math.random() * dounutDiameter);
    
        const distance = Math.sqrt(
          Math.pow(ingredientTop - dounutRadius, 2) + Math.pow(ingredientLeft - dounutRadius, 2)
        ) + ingredientRadius;
    
        return distance < dounutRadius
          ? {
            top: ingredientTop - ingredientRadius,
            left: ingredientLeft - ingredientRadius
          }
          : getPosition(ingredientWidth);
      }
    
      // Get random position for this ingredient.
      if (!fixed) {
        const position = getPosition(types[type].width);
        types[type].top = position.top + "px";
        types[type].left = position.left + "px";
    
        // Get random rotation for this ingredient.
        types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
      }
    

    return ( 
        <div className={classes.DonutIngredient} style={types[type]}></div>
     );
}
 
export default React.memo(DonutIngredient);