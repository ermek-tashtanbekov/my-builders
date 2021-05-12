import axios from "../../axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order/Order";
import withAxios from "../withAxios";
import { load } from "../../store/action/builder";

const Orders = () => {
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(load())
    }, []);

    const results = orders.map(order => <Order key={order.id} {...order} />);

    return (
        <div>
            {results}
        </div>
    );
}

export default withAxios(Orders, axios);