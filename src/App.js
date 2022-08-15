import NavBar from "./components/NavBar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes"

function App() {
  return (
    <>
      <ProductContextProvider>
        <NavBar />
        <MainRoutes />
      </ProductContextProvider>
    </>
  );
}

export default App;
