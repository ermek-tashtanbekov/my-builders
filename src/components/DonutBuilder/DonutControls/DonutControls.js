import DonutControl from "./DonutControl/DonutControl";
import classes from "./DonutControls.module.css";

const DonutControls = ({ingredients}) => {
    const results = [];

    for (const ingredient in ingredients) {
         results.push(<DonutControl type={ingredient}/>)
    }
        
    return ( 
        <div className={classes.DonutControls}>
            {results}
        </div>
     );
}
 
export default DonutControls;