import classes from './DonutPreview.module.css';
import plate from '../../../img/plate.png'
const DonutPreview = () => {
    return ( 
        <div className={classes.DonutPreview} >
            <div className={classes.plate}  style={{ backgroundImage: `url(${plate})`, backgroundPosition: "center", backgroundSize: 'cover', witdth: "520px", height: "400px", marginRight: "-3px" }}>
                
            </div>
        </div>
     );
}
 
export default DonutPreview;