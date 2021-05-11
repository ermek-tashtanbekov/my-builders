import classes from "./DonutControl.module.css";
import DonutIngredient from "../../DonutIngredient/DonutIngredient";
import Button from "../../../UI/Button/Button";

const DonutControl = ({ type, addIngredient,  removeIngredient,  count }) => {
    return (
        <div className={classes.DonutControl}>
            <Button onClick={() => addIngredient(type)}>+</Button>
            <div className={classes.ingredient}><DonutIngredient type={type} fixed/></div>
            <Button onClick={() => removeIngredient(type)} disabled={!count}>-</Button>
        </div>
    );
}

export default DonutControl;