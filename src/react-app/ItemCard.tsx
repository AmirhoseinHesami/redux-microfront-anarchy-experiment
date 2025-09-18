import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, type RootState } from "../store";

export default function ItemCard({ id, name }: { id: string; name: string }) {
  const dispatch = useDispatch();
  const inBasket = useSelector((s: RootState) =>
    s.basket.find((i) => i.id === id)
  );

  return (
    <div className="rounded-2xl flex flex-col justify-between p-2 border bg-slate-100 w-[150px] h-[150px]">
      <span className="text-center font-bold text-lg text-blue-500">
        {name}
      </span>
      <div className="flex items-center justify-center">
        {inBasket ? (
          <button
            className="bg-red-500 p-2 text-white rounded-lg"
            onClick={() => dispatch(removeItem(id))}
          >
            Remove Basket
          </button>
        ) : (
          <button
            className="bg-green-500 p-2 text-white rounded-lg"
            onClick={() => dispatch(addItem({ id, name, quantity: 1 }))}
          >
            Add To Basket
          </button>
        )}
      </div>
    </div>
  );
}
