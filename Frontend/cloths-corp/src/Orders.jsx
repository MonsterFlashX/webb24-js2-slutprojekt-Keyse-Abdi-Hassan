import { useEffect, useState } from "react";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7000/api/orders")
        .then((res) => res.json())
        .then((data) => setOrders(data))
        .catch((err) => console.error("Error fetching orders:", err));
    }, []);

    return (
        <div>
          <h2>Order History</h2>
          {orders.length === 0 ? (
            <p>No orders placed yet.</p>
          ) : (
            orders.map((order) => (
              <div key={order.id}>
                <p>Order #{order.id}</p>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
                <hr />
              </div>
            ))
          )}
        </div>
      );
    };
    
    export default Orders;