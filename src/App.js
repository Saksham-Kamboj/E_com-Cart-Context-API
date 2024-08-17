import Cart from "./components/Cart";
import Item from "./components/Item";

function App() {
  return (
    <div className="w-full min-h-screen bg-black grid grid-cols-1 md:grid-cols-2 gap-5 px-10 py-5">
      <Item />
      <Cart />
    </div>
  );
}

export default App;
