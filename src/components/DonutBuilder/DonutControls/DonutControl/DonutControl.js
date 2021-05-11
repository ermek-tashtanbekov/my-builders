import classes from "./DonutControl.module.css";
import DonutIngredient from "../../DonutIngredient/DonutIngredient";

const DonutControl = ({ type, addIngredient }) => {
    return (
        <div className={classes.DonutControl}>
            <button onClick={() => addIngredient(type)}>+</button>
            <div className={classes.ingredient}><DonutIngredient type={type} fixed/></div>
            <button>-</button>
        </div>
    );
}

export default DonutControl;