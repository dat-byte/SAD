import './App.css';
import Sidebar from './components/Sidebar';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DisplayCustomer, AddCustomer, EditCustomer } from './pages/Customer'
import { DisplayItem, AddItem, EditItem } from './pages/Item'
import { DisplayStore, AddStore, EditStore } from './pages/Store'
import { DisplayEmployee, AddEmployee, EditEmployee } from './pages/Employee'
import { DisplayDrone, AddDrone, EditDrone, SendRefuelingDrone } from './pages/Drone'
import { DisplayOrder, AddOrder, EditOrder, TransferOrder, AddItemsToOrder } from './pages/Order'

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        {/* ---   Checkout    --- */}
        <Route path="/checkout" exact element={<Checkout />} />

        {/* ---   Customer    --- */}
        <Route path="/customers" exact element={<DisplayCustomer />} />
        <Route path="/customers/add-customer" exact element={<AddCustomer />} />
        <Route path="/customers/edit-customer" exact element={<EditCustomer />} />

        {/* ---   Employee   --- */}
        <Route path="/employees" exact element={<DisplayEmployee />} />
        <Route path="/employees/add-employee" exact element={<AddEmployee />} />
        <Route path="/employees/edit-employee" exact element={<EditEmployee />} />

        {/* ---   Store   --- */}
        <Route path="/stores" exact element={<DisplayStore />} />
        <Route path="/stores/add-store" exact element={<AddStore />} />
        <Route path="/stores/edit-store" exact element={<EditStore />} />

        {/* ---   Drone   --- */}
        <Route path="/drones" exact element={<DisplayDrone />} />
        <Route path="/drones/add-drone" exact element={<AddDrone />} />
        <Route path="/drones/edit-drone" exact element={<EditDrone />} />
        <Route path="/drones/send-refueling" exact element={<SendRefuelingDrone />} />

        {/* ---   Items   --- */}
        <Route path="/items" exact element={<DisplayItem />} />
        <Route path="/items/add-item" exact element={<AddItem />} />
        <Route path="/items/edit-item" exact element={<EditItem />} />

        {/* ---   Order   --- */}
        <Route path="/orders" exact element={<DisplayOrder />} />
        <Route path="/orders/add-order" exact element={<AddOrder />} />
        <Route path="/orders/edit-order" exact element={<EditOrder />} />
        <Route path="/orders/add-item-to-order" exact element={<AddItemsToOrder />} />
        <Route path="/orders/transfer-order" exact element={<TransferOrder />} />
        
      </Routes>
    </Router>
  );
}

export default App;
