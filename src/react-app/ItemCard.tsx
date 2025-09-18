import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, type RootState } from "../store";

export default function ItemCard({ id, name }: { id: string; name: string }) {
  const dispatch = useDispatch();
  const inBasket = useSelector((s: RootState) =>
    s.basket.find((i) => i.id === id)
  );

  return (
    <div className="rounded-xl flex flex-col justify-between p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-200 w-[180px] h-[200px] border border-gray-100">
      <div className="flex items-center justify-center h-24 bg-gray-50 rounded-lg mb-4">
        <span className="text-center font-bold text-xl text-gray-800">
          {name}
        </span>
      </div>
      <div className="flex items-center justify-center">
        {inBasket ? (
          <button
            className="w-full bg-red-500 hover:bg-red-600 py-2 px-4 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            onClick={() => dispatch(removeItem(id))}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            Remove
          </button>
        ) : (
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 px-4 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            onClick={() => dispatch(addItem({ id, name, quantity: 1 }))}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
