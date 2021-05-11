import classes from "./DonutBuilder.module.css";
import DonutControls from "./DonutControls/DonutControls";
import DonutPreview from "./DonutPreview/DonutPreview";

const DonutBuilder = () => {
    return ( 
        <div className={classes.DonutBuilder}>
            <DonutPreview/>
            <DonutControls/>
        </div>
     );
}
 
export default DonutBuilder;