import classes from "./Checkout.module.css";
import DonutPreview from "../DonutBuilder/DonutPreview/DonutPreview"
import CheckoutForm from "./CheckoutForm/CheckoutForm"
import axios from "../.././axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios";

const Checkout = ({ history }) => {
    const {token, id} = useSelector(state => state.auth);
    const ingredients = useSelector(state => state.builder.ingredients);
    const price = useSelector(state => state.builder.price);
  
    function cancelCallback() {
        history.replace('/')
    }
   
    function submitCallback(event) {
        const data = new FormData(event.target);

        axios.post('/orders.json?auth=' + token, {
            name: data.get('name'),
            address: data.get('address'),
            phone: data.get('phone'),
            ingredients: ingredients,
            price: price,
            userId : id
        }).then(response => {
            history.replace('/');
        });

        event.preventDefault();
    }
    return (
        <div className={classes.Checkout}>
            <DonutPreview ingredients={ingredients} price={price} />
            <CheckoutForm cancelCallback={cancelCallback}
                submitCallback={submitCallback} />
        </div>
    );
}

export default withAxios(Checkout, axios);




// import classes from "./Checkout.module.css";
// import DonutPreview from "../DonutBuilder/DonutPreview/DonutPreview"
// import CheckoutForm from "./CheckoutForm/CheckoutForm"
// import axios from "../.././axios";
// import { useSelector } from "react-redux";

// const Checkout = ({ history }) => {
//     const ingredients = useSelector(state => state.builder.ingredients);
//     const price = useSelector(state => state.builder.price);
//     function cancelCallback() {
//         history.replace('/')
//     }
//     function submitCallback(event) {
//         const data = new FormData(event.target);

//         axios.post('/orders.json', {
//             name: data.get('name'),
//             address: data.get('address'),
//             phone: data.get('phone'),
//             ingredients: {
//                 tomato: 10,
//                 salami: 10,
//                 redPepper: 10,
//                 yellowPepper: 10,
//                 greenOlive: 10,
//                 blackOlive: 10,
//             },
//             price: 100,
//         }).then(response => {
//             history.replace('/');
//         });

//         event.preventDefault();
//     }
//     return (
//         <div className={classes.Checkout}>
//             <DonutPreview ingredients={{
//                 red: 1,
//                 blue: 1,
//                 brown: 1,
//                 black: 1,
//                 pink: 1,
//                 violet: 1
//             }} price={150} />
//             <CheckoutForm cancelCallback={cancelCallback}
//                 submitCallback={submitCallback} />
//         </div>
//     );
// }

// export default  Checkout;