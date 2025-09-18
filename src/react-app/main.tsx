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
    <div className="space-y-2 w-full flex-1">
      <h2 className="font-bold">Products</h2>
      <div className="w-full flex gap-4">
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
