import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import CartContextProvider from "./contexts/CartContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <NavBar />
          <MainRoutes />
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
