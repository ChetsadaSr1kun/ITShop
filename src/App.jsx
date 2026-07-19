import { Route, Routes } from "react-router";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<ProductListPage />}
      />

      <Route
        path="/products/:productId"
        element={<ProductDetailPage />}
      />
    </Routes>
  );
}

export default App;