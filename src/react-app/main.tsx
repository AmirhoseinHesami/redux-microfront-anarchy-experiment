import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../store";
import ItemCard from "./ItemCard";

const items = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Banana" },
  { id: "3", name: "Orange" },
  { id: "4", name: "Kiwi" },
];

function App() {
  return (
    <div className="w-full flex-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("react-root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
