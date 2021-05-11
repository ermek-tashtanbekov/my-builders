import DonutControl from "./DonutControl/DonutControl";
import classes from "./DonutControls.module.css";

const DonutControls = ({ingredients, addIngredient,removeIngredient, startOrdering }) => {
    const results = [];

    for (const ingredient in ingredients) {
         results.push(<DonutControl type={ingredient} addIngredient={addIngredient}  removeIngredient={ removeIngredient}/>)
    }
        
    return ( 
        <div className={classes.DonutControls}>
           <div>
           {results}
           <button onClick={() => startOrdering()}>Order</button>
           </div> 
        </div>
     );
}
 
export default DonutControls;