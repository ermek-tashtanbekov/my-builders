import axios from "../.././axios";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import withAxios from "../withAxios";
import classes from "./DonutBuilder.module.css";
import DonutControls from "./DonutControls/DonutControls";
import DonutPreview from "./DonutPreview/DonutPreview";
import OrderSummary from "./OrderSummary/OrderSummary";
import { load } from "../../store/action/builder";


const DonutBuilder = ({ history }) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.token !== null)
    const ingredients = useSelector(state => state.builder.ingredients);
    const price = useSelector(state => state.builder.price);
    const [ordering, setOrdering] = useState(false);

    useEffect(() => dispatch(load()), [dispatch]);


    // useEffect(loadDefaults, []);

    //     function loadDefaults() {
    //         axios
    //             .get('https://work-1-b6be6-default-rtdb.firebaseio.com/defauld.json')
    //             .then(response => {
    //                 setPrice(response.data.price);

    //                 // For arrays
    //                 // setIngredients(Object.values(response.data.ingredients));
    //                 // For objects
    //                 setIngredients(response.data.ingredients);
    //             });
    //     }





    function startOrdering() {
        if(isAuthenticated){
            setOrdering(true)
        }
        else{
            history.push('/auth')
        }
        // setOrdering(true);
    }

    function stopOrdering() {
        setOrdering(false);
    }
    function finishOrdering() {
        setOrdering(false);
        // loadDefaults()
         history.push('/checkout');
    }



    return (
        <div className={classes.DonutBuilder}>
            <DonutPreview  ingredients={ingredients}
                price={price} />
            <DonutControls ingredients={ingredients}
                startOrdering={startOrdering}
            />


            <Modal show={ordering} cancel={stopOrdering}>
                <OrderSummary ingredients={ingredients}
                     price={price} /> 

                <div className={classes.Button}>
                    <Button onClick={() => finishOrdering()} green="green">Checkout</Button>
                    <Button onClick={() => stopOrdering()} >Cancel</Button>
                </div>
            </Modal>
        </div>
    );
}

export default withAxios(DonutBuilder, axios);










































































// import axios from "axios";
// import { useEffect, useState } from "react";
// import Button from "../UI/Button/Button";
// import Modal from "../UI/Modal/Modal";
// import classes from "./DonutBuilder.module.css";
// import DonutControls from "./DonutControls/DonutControls";
// import DonutPreview from "./DonutPreview/DonutPreview";
// import OrderSummary from "./OrderSummary/OrderSummary";

// const DonutBuilder = ({history}) => {
//     const [ingredients, setIngredients] = useState({})
//     const [price, setPrice] = useState(0);
//     const [ordering, setOrdering] = useState(false);
//     const prices = {
//         red: 15,
//         blue: 25,
//         brown: 53,
//         black: 32,
//         pink: 25,
//         violet: 47
//     }
//     useEffect(loadDefaults, []);

//         function loadDefaults() {
//             axios
//                 .get('https://work-1-b6be6-default-rtdb.firebaseio.com/defauld.json')
//                 .then(response => {
//                     setPrice(response.data.price);

//                     // For arrays
//                     // setIngredients(Object.values(response.data.ingredients));
//                     // For objects
//                     setIngredients(response.data.ingredients);
//                 });
//         }





//     function startOrdering() {
//         setOrdering(true);
//     }

//     function stopOrdering() {
//         setOrdering(false);
//     }
//     function finishOrdering() {
//         axios.post('https://work-1-b6be6-default-rtdb.firebaseio.com/orders.json', {
//             ingredients: ingredients,
//             price: price,
//             address: "1234 Jusaeva str",
//             phone: "0 777 777 777",
//             name: "Sadyr Japarov",
//         })
//             .then(() => {
//                 setOrdering(false);
//                 loadDefaults()
//                 history.push('/checkout');
//             })
//     }

//     function addIngredient(type) {
//         const newIngredients = { ...ingredients };
//         newIngredients[type]++;
//         setPrice(price + prices[type]);
//         setIngredients(newIngredients);
//     }
//     function removeIngredient(type) {
//         if (ingredients[type]) {
//             const newIngredients = { ...ingredients };
//             newIngredients[type]--;
//             setPrice(price - prices[type])
//             setIngredients(newIngredients)
//         }

//     }

//     return (
//         <div className={classes.DonutBuilder}>
//             <DonutPreview ingredients={ingredients}
//                 price={price} />
//             <DonutControls ingredients={ingredients}
//                 addIngredient={addIngredient}
//                 removeIngredient={removeIngredient}
//                 startOrdering={startOrdering}
//             />


//             <Modal show={ordering} cancel={stopOrdering}>
//                 <OrderSummary ingredients={ingredients} price={price} />

//                 <div className={classes.Button}>
//                     <Button onClick={() => finishOrdering()} green>Checkout</Button>
//                     <Button onClick={() => stopOrdering()} >Cancel</Button>
//                 </div>
//             </Modal>
//         </div>
//     );
// }

// export default DonutBuilder;








// import { useState } from "react";
// import Modal from "../UI/Modal/Modal";
// import classes from "./DonutBuilder.module.css";
// import DonutControls from "./DonutControls/DonutControls";
// import DonutPreview from "./DonutPreview/DonutPreview";

// const DonutBuilder = () => {
//     const [ingredients, setIngredients] = useState({
//         red: 1,
//         blue:1,
//         black:1,
//         pink:1,
//         brown:1,
//         violet:1
//     })

// function addIngredient(type){
//     const newIngredients = { ...ingredients };
//     newIngredients[type]++;
//     setIngredients(newIngredients)
// }
// function removeIngredient(type){
//     const newIngredients = { ...ingredients };
//     newIngredients[type]--;
//     setIngredients(newIngredients)
// }

//     return ( 
//         <div className={classes.DonutBuilder}>
//             <DonutPreview ingredients={ingredients}/>
//             <DonutControls ingredients={ingredients}
//             addIngredient={addIngredient}
//             removeIngredient={ removeIngredient}
//             />

//             <Modal>
//                 hello
//             </Modal>
//         </div>
//      );
// }

// export default DonutBuilder;