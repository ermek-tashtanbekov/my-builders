import classes from "./DonutControl.module.css";
import DonutIngredient from "../../DonutIngredient/DonutIngredient";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/action/builder";

const DonutControl = ({ type,  count }) => {
    const dispatch = useDispatch()
    return (
        <div className={classes.DonutControl}>
            <Button onClick={() => dispatch(add(type))}>+</Button>
            <div className={classes.ingredient}><DonutIngredient type={type} fixed/></div>
            <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
        </div>
    );
}

export default DonutControl;