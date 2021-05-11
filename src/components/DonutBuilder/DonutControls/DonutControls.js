import DonutControl from "./DonutControl/DonutControl";
import classes from "./DonutControls.module.css";

const DonutControls = ({ingredients, addIngredient}) => {
    const results = [];

    for (const ingredient in ingredients) {
         results.push(<DonutControl type={ingredient} addIngredient={addIngredient}/>)
    }
        
    return ( 
        <div className={classes.DonutControls}>
            {results}
        </div>
     );
}
 
export default DonutControls;