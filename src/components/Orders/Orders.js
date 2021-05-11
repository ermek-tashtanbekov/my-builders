import axios from "axios";
import { useEffect, useState } from "react";
import Order from "./Order/Order";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('https://work-1-b6be6-default-rtdb.firebaseio.com/orders.json')
            .then(response => {
                const newOrders = Object.keys(response.data).map(id => {
                    return {
                        ...response.data[id],
                        id: id,
                    };
                });
                setOrders(newOrders);
            });
    }, []);

    const results = orders.map(order => <Order key={order.id} {...order} />);

    return (
        <div>
            {results.length > 0 ? results : "loading"}
        </div>
    );
}
 
export default Orders;