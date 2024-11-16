import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import WidgetsData from "./pages/WidgetsData/WidgetsData";
import Footer from "./components/Footer/Footer";
import CustomizeThem from "./components/CustomizeThem/CustomizeThem";
import Overlay from "./components/Overlay/Overlay";
import Calender from "./pages/Apps/Calender";
import DataTable from "./pages/DataTables/DataTable";
import DateTimePickers from "./pages/FromDate/DateTimePickers";
import From from "./pages/FromDate/From";
import Charts from "./pages/Charts/Charts";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import ResetPassword from "./pages/Authentication/ResetPassword";
import Error from "./components/NotFound/Error";
import ComponentCarousels from "./pages/Component-Carousels/ComponentCarousels";
import UserProfile from "./pages/Profile/UserProfile";
import AppInvoice from "./pages/Apps/AppInvoice";

// =========================
import ProductsAdd from "./pages/Products/ProductsAdd";
import ProductList from "./pages/Products/ProductList";
import ProductsUpdate from "./pages/Products/ProductsUpdate";
import Category from "./pages/Products/Category";
import Brand from "./pages/Products/Brand";
import Unit from "./pages/Products/Unit";

import SellProductAdd from "./pages/SaleProduct/SellProductAdd";
import SellProductsList from "./pages/SaleProduct/SellProductsList";

import PurchaseEntry from "./pages/Purchase/PurchaseEntry";
import PurchaseList from "./pages/Purchase/PurchaseList";
import PurchaseView from "./pages/Purchase/PurchaseView";

import Stock from "./pages/Stock/Stock";

import SalesInvoice from "./pages/Reports/SalesInvoice";
import CustomerLadger from "./pages/Reports/CustomerLadger";
import SupplierLedger from "./pages/Reports/SupplierLedger";
import PurchaseInvoice from "./pages/Reports/PurchaseInvoice";
import ProfitLoss from "./pages/Reports/ProfitLoss";

import Customer from "./pages/Setting/Customer";
import Supplier from "./pages/Setting/Supplier";
import SaleOverView from "./pages/SaleProduct/SaleOverView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/widgets-data" element={<WidgetsData />} />
          <Route path="/app-fullcalender" element={<Calender />} />
          <Route path="/table-datatable" element={<DataTable />} />
          <Route path="/form" element={<From />} />
          <Route path="/form-date-time-pickes" element={<DateTimePickers />} />
          <Route path="/charts-apex-chart" element={<Charts />} />
          <Route path="/auth-boxed-login" element={<Login />} />
          <Route path="/auth-boxed-register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/component-carousels" element={<ComponentCarousels />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/app-invoice" element={<AppInvoice />} />

          {/* ====================== */}
          <Route path="/product-add" element={<ProductsAdd />} />
          <Route path="/products" element={<ProductList />} />
          <Route
            // path="/product-update/:productId"
            path="/product-update"
            element={<ProductsUpdate />}
          />
          <Route path="/category" element={<Category />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/unit" element={<Unit />} />

          <Route path="/sell-product-add" element={<SellProductAdd />} />
          <Route path="/sell-product" element={<SellProductsList />} />
          <Route path="/sale-view" element={<SaleOverView />} />

          <Route path="/purchase-entry" element={<PurchaseEntry />} />
          <Route path="/purchase" element={<PurchaseList />} />
          <Route path="/purchase-view/:id" element={<PurchaseView />} />

          <Route path="/stock" element={<Stock />} />

          <Route path="/sales-invoice" element={<SalesInvoice />} />
          <Route path="/customer-ledger" element={<CustomerLadger />} />
          <Route path="/supplier-ledger" element={<SupplierLedger />} />
          <Route path="/purchase-invoice" element={<PurchaseInvoice />} />
          <Route path="/profit-loss" element={<ProfitLoss />} />

          <Route path="/customer" element={<Customer />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Overlay />
        {/* <Error/> */}
        <Footer />
        <CustomizeThem />
      </BrowserRouter>
    </div>
  );
}

export default App;
