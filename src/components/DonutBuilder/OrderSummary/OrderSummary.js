import classes from "./OrderSummary.module.css";


const OrderSummary = ({ ingredients, price }) => {
    const labels = {
        red: "Red",
        blue: "Blue",
        brown: "Brown",
        black: "Black",
        pink: "Pink",
        violet: "Violet"
    }
    const results = Object.keys(ingredients)
        .map(type => <li key={type}>{labels[type]}: {ingredients[type]}</li>);

    return (
        <div className={classes.OrderSummary}>
            <h3>Order summary</h3>
            <ul>
                {results}
            </ul>
            <strong>Total price: {price.toFixed(1)} som</strong>
        </div>
    );
}

export default OrderSummary;



// const OrderSummary = ({ ingredients, price }) => {
//     const labels = {
//         red: "Red",
//         blue: "Blue",
//         brown: "Brown",
//         black: "Black",
//         pink: "Pink",
//         violet: "Violet"
//     }
//     const results = Object.keys(ingredients)
//         .map(type => <li>{labels[type]} : {ingredients[type]}</li>)
//     return (
//         <div className={classes.OrderSummary}>
//             <h3>Order summary</h3>
//             <ul>
//                 {results}
//             </ul>
//             <strong>Total price: {price.toFixed(1)} som</strong>
//         </div>
//     );
// }

// export default OrderSummary;