import { useMemo } from "react";
import { OrderItem, TotalOrder } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  setTotalOrder: React.Dispatch<React.SetStateAction<TotalOrder[]>>;
};

function OrderTotals({ order, tip, setTotalOrder } : OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);
  const orderTotal = {
    ...order,
    total: totalAmount
  }

  return (
    <>
      <div className="space-y-3">
        <h2 className=" font-black text-2xl"> Totales y Propinas</h2>
        <p>
          {" "}
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          {" "}
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          {" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10 hover:opacity-90"
        disabled={totalAmount === 0}
        onClick={() => console.log('Orden Guardada')}
      >
        Guardar Orden
      </button>
    </>
  );
}

export default OrderTotals;
