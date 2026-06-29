import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Sidebar from "./components/Sidebar";
import Wallet from "./screens/Wallet";
import Payment from "./screens/Payment";
import History from "./screens/History";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div className="flex">
                <div className="flex-shrink-0">
                  <Sidebar />
                </div>

                <div className="flex-1 px-6">
                  
                  <HomeScreen />
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/wallet"
          element={
            <ProtectedRoute>
              <div className="flex">
                <div className="flex-shrink-0">
                  <Sidebar />
                </div>

                <div className="flex-1 px-6">
                  <Wallet />
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <div className="flex">
                <div className="flex-shrink-0">
                  <Sidebar />
                </div>

                <div className="flex-1 px-6">
                  <Payment />
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <div className="flex">
                <div className="flex-shrink-0">
                  <Sidebar />
                </div>

                <div className="flex-1 px-6">
                  <History />
                </div>
              </div>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;