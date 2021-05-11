import classes from "./DonutBuilder.module.css";
import DonutControls from "./DonutControls/DonutControls";
import DonutPreview from "./DonutPreview/DonutPreview";

const DonutBuilder = () => {
const ingredients ={
    red: 1,
    blue:1,
    black:1,
    pink:1,
    brown:1,
    violet:1
}

    return ( 
        <div className={classes.DonutBuilder}>
            <DonutPreview ingredients={ingredients}/>
            <DonutControls/>
        </div>
     );
}
 
export default DonutBuilder;