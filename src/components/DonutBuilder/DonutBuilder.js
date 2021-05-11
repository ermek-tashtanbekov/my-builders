import { useState } from "react";
import classes from "./DonutBuilder.module.css";
import DonutControls from "./DonutControls/DonutControls";
import DonutPreview from "./DonutPreview/DonutPreview";

const DonutBuilder = () => {
    const [ingredients, setIngredients] = useState({
        red: 1,
        blue:1,
        black:1,
        pink:1,
        brown:1,
        violet:1
    })

function addIngredient(type){
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients)
}

    return ( 
        <div className={classes.DonutBuilder}>
            <DonutPreview ingredients={ingredients}/>
            <DonutControls ingredients={ingredients}
            addIngredient={addIngredient}
            />
        </div>
     );
}
 
export default DonutBuilder;