import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./DonutBuilder.module.css";
import DonutControls from "./DonutControls/DonutControls";
import DonutPreview from "./DonutPreview/DonutPreview";

const DonutBuilder = () => {
    const [ingredients, setIngredients] = useState({})
    const [price, setPrice] = useState(0)
    const prices = {
        red: 15,
        blue: 25,
        brown: 53,
        black: 32,
        pink: 25,
        violet: 47
    }


    useEffect(() =>
       axios.get('https://work-1-b6be6-default-rtdb.firebaseio.com/defauld.json')
       .then(response =>{
           setPrice(response.data.price);
           setIngredients(response.data.ingredients)
       }),[]
    )

    function addIngredient(type) {
        const newIngredients = { ...ingredients };
        newIngredients[type]++;
        setPrice(price + prices[type]);
        setIngredients(newIngredients);
       }
    function removeIngredient(type) {
        if (ingredients[type]) {
            const newIngredients = { ...ingredients };
            newIngredients[type]--;
            setPrice(price - prices[type])
            setIngredients(newIngredients)
        }

    }

    return (
        <div className={classes.DonutBuilder}>
            <DonutPreview ingredients={ingredients} 
            price={price}/>
            <DonutControls ingredients={ingredients}
                addIngredient={addIngredient}
                removeIngredient={removeIngredient}
            />

            <Modal>
                hello
            </Modal>
        </div>
    );
}

export default DonutBuilder;








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