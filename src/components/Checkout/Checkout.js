import classes from "./Checkout.module.css";
import DonutPreview from "../DonutBuilder/DonutPreview/DonutPreview"
import CheckoutForm from "./CheckoutForm/CheckoutForm"
import axios from "axios";

const Checkout = ({ history }) => {
    function cancelCallback() {
        history.replace('/')
    }
    function submitCallback(event) {
        const data = new FormData(event.target);

        axios.post('https://work-1-b6be6-default-rtdb.firebaseio.com/orders.json', {
            name: data.get('name'),
            address: data.get('address'),
            phone: data.get('phone'),
            ingredients: {
                tomato: 10,
                salami: 10,
                redPepper: 10,
                yellowPepper: 10,
                greenOlive: 10,
                blackOlive: 10,
            },
            price: 100,
        }).then(response => {
            history.replace('/');
        });

        event.preventDefault();
    }
    return (
        <div className={classes.Checkout}>
            <DonutPreview ingredients={{
                red: 1,
                blue: 1,
                brown: 1,
                black: 1,
                pink: 1,
                violet: 1
            }} price={150} />
            <CheckoutForm cancelCallback={cancelCallback}
                submitCallback={submitCallback} />
        </div>
    );
}

export default Checkout;