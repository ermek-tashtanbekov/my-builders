import classes from "./DonutControl.module.css";
import DonutIngredient from "../../DonutIngredient/DonutIngredient";

const DonutControl = ({ type }) => {
    return (
        <div className={classes.DonutControl}>
            <button>+</button>
            <div className={classes.ingredient}><DonutIngredient type={type} fixed/></div>
            <button>-</button>
        </div>
    );
}

export default DonutControl;