import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayCustomer from "./pages/Customer";
import DisplayItem from "./pages/Item";
import DisplayStore from "./pages/Store";
import DisplayEmployee from "./pages/Employee";
import DisplayDrone from "./pages/Drone";
import DisplayOrder from "./pages/Order";
import TextForm from "./components/form/TextForm";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        {/* ---   Customer    --- */}
        <Route path="/customers" exact element={<DisplayCustomer />} />
        <Route
          path="/customers/add-customer"
          exact
          element={
            <TextForm
              title={"Add Customer"}
              controller={"customer"}
              objectKey={"customer"}
            />
          }
        />
        <Route
          path="/customers/edit-customer"
          exact
          element={
            <TextForm
              title={"Edit Customer"}
              controller={"customer"}
              objectKey={"customer"}
            />
          }
        />

        {/* ---   Employee   --- */}
        <Route path="/employees" exact element={<DisplayEmployee />} />
        <Route
          path="/employees/add-employee"
          exact
          element={
            <TextForm
              title={"Add Employee"}
              controller={"employee"}
              objectKey={"employee"}
            />
          }
        />
        <Route
          path="/employees/edit-employee"
          exact
          element={
            <TextForm
              title={"Edit Employee"}
              controller={"employee"}
              objectKey={"employee"}
            />
          }
        />

        {/* ---   Store   --- */}
        <Route path="/stores" exact element={<DisplayStore />} />
        <Route
          path="/stores/add-store"
          exact
          element={
            <TextForm
              title={"Add Store"}
              controller={"store"}
              objectKey={"store"}
            />
          }
        />
        <Route
          path="/stores/edit-store"
          exact
          element={
            <TextForm
              title={"Edit Store"}
              controller={"store"}
              objectKey={"store"}
            />
          }
        />

        {/* ---   Drone   --- */}
        <Route path="/drones" exact element={<DisplayDrone />} />
        <Route
          path="/drones/add-drone"
          exact
          element={
            <TextForm
              title={"Add Drone"}
              controller={"drone"}
              objectKey={"drone"}
            />
          }
        />
        <Route
          path="/drones/edit-drone"
          exact
          element={
            <TextForm
              title={"Edit Drone"}
              controller={"drone"}
              objectKey={"drone"}
            />
          }
        />
        <Route
          path="/drones/send-refueling"
          exact
          element={
            <TextForm
              title={"Send Refuelig Drone"}
              controller={"drone"}
              objectKey={"send-refueling-drone"}
            />
          }
        />

        {/* ---   Items   --- */}
        <Route path="/items" exact element={<DisplayItem />} />
        <Route
          path="/items/add-item"
          exact
          element={<TextForm title={"Add Item"} controller={'item'} objectKey={"item"} />}
        />
        <Route
          path="/items/edit-item"
          exact
          element={<TextForm title={"Edit Item"} controller={'item'} objectKey={"item"} />}
        />

        {/* ---   Order   --- */}
        <Route path="/orders" exact element={<DisplayOrder />} />
        <Route
          path="/orders/add-order"
          exact
          element={<TextForm title={"Add Order"} controller={'order'} objectKey={"order"} />}
        />
        <Route
          path="/orders/edit-order"
          exact
          element={<TextForm title={"Edit Order"} controller={'order'} objectKey={"order"} />}
        />
        <Route
          path="/orders/add-item-to-order"
          exact
          element={
            <TextForm title={"Add To Order"} controller={'order'} objectKey={"add-item-to-order"} />
          }
        />
        <Route
          path="/orders/transfer-order"
          exact
          element={
            <TextForm title={"Transfer Order"} controller={'order'} objectKey={"transfer-order"} />
          }
        />
         <Route
          path="/orders/purchase-order"
          exact
          element={
            <TextForm title={"Purchase Order"} controller={'order'} objectKey={"purchase-order"} />
          }
        />

        {/* ---   Coupons   --- */}
        <Route path="/coupons" exact element={<DisplayItem />} />
        <Route
          path="/coupons/add-coupon"
          exact
          element={<TextForm title={"Add Coupon"} controller={'coupon'} objectKey={"coupon"} />}
        />
        <Route
          path="/coupons/edit-coupon"
          exact
          element={<TextForm title={"Edit Coupon"} controller={'coupon'} objectKey={"coupon"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
