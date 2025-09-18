import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, type RootState } from "../store";

export default function ItemCard({
  id,
  name,
  description,
  price,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
}) {
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basket);
  const isInBasket = basket.some((item) => item.id === id);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full transform hover:scale-105 transition-all duration-200 min-w-64">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="text-2xl font-bold text-blue-600 mb-4">
          ${price.toFixed(2)}
        </div>
      </div>
      {isInBasket ? (
        <button
          className="w-full bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => dispatch(removeItem(id))}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Remove from Cart
        </button>
      ) : (
        <button
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
          onClick={() =>
            dispatch(addItem({ id, name, description, price, quantity: 1 }))
          }
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to Cart
        </button>
      )}
    </div>
  );
}
