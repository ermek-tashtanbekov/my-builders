import classes from './DonutPreview.module.css';
import plate from '../../../img/plate.png'
const DonutPreview = ({ingredients}) => {
    const result = []

    for(const ingredient in ingredients){
        for(let i = 0 ; i < ingredients[ingredient]; i++){
            result.push(ingredient)
        }
    }
    return ( 
        <div className={classes.DonutPreview} >
            <div className={classes.plate}  style={{ backgroundImage: `url(${plate})`, backgroundPosition: "center", backgroundSize: 'cover', witdth: "520px", height: "400px", marginRight: "-3px" }}>
                <div>{result}</div>
            </div>
        </div>
     );
}
 
export default DonutPreview;