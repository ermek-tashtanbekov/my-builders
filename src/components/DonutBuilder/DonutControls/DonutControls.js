import Button from "../../UI/Button/Button";
import DonutControl from "./DonutControl/DonutControl";
import classes from "./DonutControls.module.css";

const DonutControls = ({ingredients, startOrdering }) => {
    const results = [];
     let total = 0;
    for (const ingredient in ingredients) {
        total += ingredients[ingredient]
         results.push(<DonutControl type={ingredient}  count={ingredients[ingredient]}/>)
    }
        
    return ( 
        <div className={classes.DonutControls}>
           <div>
           {results}
           <div className={classes.Button}>
           <Button onClick={() => startOrdering()} disabled={!total}><span>Order</span></Button>
           </div>
           
           </div> 
        </div>
     );
}
 
export default DonutControls;


// import Button from "../../UI/Button/Button";
// import DonutControl from "./DonutControl/DonutControl";
// import classes from "./DonutControls.module.css";

// const DonutControls = ({ingredients, addIngredient,removeIngredient, startOrdering }) => {
//     const results = [];
//      let total = 0;
//     for (const ingredient in ingredients) {
//         total += ingredients[ingredient]
//          results.push(<DonutControl type={ingredient} addIngredient={addIngredient}  removeIngredient={ removeIngredient}  count={ingredients[ingredient]}/>)
//     }
        
//     return ( 
//         <div className={classes.DonutControls}>
//            <div>
//            {results}
//            <div className={classes.Button}>
//            <Button onClick={() => startOrdering()} disabled={!total}>Order</Button>
//            </div>
           
//            </div> 
//         </div>
//      );
// }
 
// export default DonutControls;