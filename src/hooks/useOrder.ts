import { useState, useEffect } from "react";
import type { MenuItem, OrderItem, TotalOrder } from "../types";

export default function useOder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const [totalOrder, setTotalOrder] = useState<TotalOrder[]>([]);
  
  useEffect(() => {
    if (totalOrder) {
      setOrder([]);
      setTip(0);
    }
  }, [totalOrder]);
  

  const addItem = (item: MenuItem) => {
    const itemExits = order.find((orderItem) => orderItem.id === item.id);
    if (itemExits) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      // const newItem : OrderItem = {...item, quantity: 1}
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id != id));
  };

  return {
    order,
    tip,
    totalOrder,
    setTip,
    addItem,
    removeItem,
    setTotalOrder,
  };
}
