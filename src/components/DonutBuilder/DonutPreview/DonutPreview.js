import classes from './DonutPreview.module.css';
import plate from '../../../img/plate.png'
import DonutIngredient from '../DonutIngredient/DonutIngredient';
const DonutPreview = ({ingredients}) => {
    const result = []

    for(const ingredient in ingredients){
        for(let i = 0 ; i < ingredients[ingredient]; i++){
            result.push(<DonutIngredient type={ingredient} />)
        }
    }
    return ( 
        <div className={classes.DonutPreview} >
            <div className={classes.plate}  style={{ backgroundImage: `url(${plate})`, backgroundPosition: "center", backgroundSize: 'cover', witdth: "520px", height: "400px", marginRight: "-3px" }}>
                <div className={classes.ingredients }>{result}</div>
            </div>
        </div>
     );
}
 
export default DonutPreview;