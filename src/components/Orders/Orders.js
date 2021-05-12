import axios from "../../axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order/Order";
import withAxios from "../withAxios";
import { load } from "../../store/action/orders";


const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
   

 useEffect(() =>{
     dispatch(load())
 }, [])

    const results = orders.map(order => <Order key={order.id} {...order} />);

    return (
        <div>
            {results}
        </div>
    );
}

export default withAxios(Orders, axios);