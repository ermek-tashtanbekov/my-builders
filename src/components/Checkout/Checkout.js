import classes from "./Checkout.module.css";
import DonutPreview from "../DonutBuilder/DonutPreview/DonutPreview"
import CheckoutForm from "./CheckoutForm/CheckoutForm"

const Checkout  = ({history}) => {
    function cancelCallback(){
        history.replace('/')
    }
    return ( 
        <div className={classes.Checkout}>
            <DonutPreview ingredients={{
                red:1,
                blue:1,
                brown: 1,
                black:1,
                pink:1,
                violet:1
            }} price={150}/>
            <CheckoutForm/>
        </div>
     );
}
 
export default Checkout ;