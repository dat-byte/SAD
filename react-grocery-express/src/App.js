import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayCustomer from './pages/Customer'
import { DisplayItem, AddItem, EditItem } from './pages/Item'
import DisplayStore from './pages/Store'
import DisplayEmployee from './pages/Employee'
import { DisplayDrone, AddDrone, EditDrone, SendRefuelingDrone } from './pages/Drone'
import { DisplayOrder, AddOrder, EditOrder, TransferOrder, AddItemsToOrder } from './pages/Order'
import TextForm from './components/form/TextForm';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        {/* ---   Checkout    --- */}
        <Route path="/checkout" exact element={<Checkout />} />

        {/* ---   Customer    --- */}
        <Route path="/customers" exact element={<DisplayCustomer />} />
        <Route path="/customers/add-customer" exact element={<TextForm title={'Add Customer'} objectKey={'customer'} />} />
        <Route path="/customers/edit-customer" exact element={<TextForm title={'Edit Customer'} objectKey={'customer'} />} />

        {/* ---   Employee   --- */}
        <Route path="/employees" exact element={<DisplayEmployee />} />
        <Route path="/employees/add-employee" exact element={<TextForm title={'Add Employee'} objectKey={'employee'} />} />
        <Route path="/employees/edit-employee" exact element={<TextForm title={'Edit Employee'} objectKey={'employee'} />} />

        {/* ---   Store   --- */}
        <Route path="/stores" exact element={<DisplayStore />} />
        <Route path="/stores/add-store" exact element={<TextForm title={'Add Store'} objectKey={'store'} />} />
        <Route path="/stores/edit-store" exact element={<TextForm title={'Edit Store'} objectKey={'store'} />} />

        {/* ---   Drone   --- */}
        <Route path="/drones" exact element={<DisplayDrone />} />
        <Route path="/drones/add-drone" exact element={<TextForm title={'Add Drone'} objectKey={'drone'} />} />
        <Route path="/drones/edit-drone" exact element={<TextForm title={'Edit Drone'} objectKey={'drone'} />} />
        <Route path="/drones/send-refueling" exact element={<TextForm title={'Send Refuelig Drone'} objectKey={'send-refueling-drone'} />} />

        {/* ---   Items   --- */}
        <Route path="/items" exact element={<DisplayItem />} />
        <Route path="/items/add-item" exact element={<TextForm title={'Add Item'} objectKey={'item'}/>} />
        <Route path="/items/edit-item" exact element={<TextForm title={'Edit Item'}  objectKey={'item'}/>} />

        {/* ---   Order   --- */}
        <Route path="/orders" exact element={<DisplayOrder />} />
        <Route path="/orders/add-order" exact element={<TextForm title={'Add Order'} objectKey={'order'}/>} />
        <Route path="/orders/edit-order" exact element={<TextForm title={'Edit Order'} objectKey={'order'}/>} />
        <Route path="/orders/add-item-to-order" exact element={<TextForm title={'Add To Order'}  objectKey={'add-item-to-order'}/>} />
        <Route path="/orders/transfer-order" exact element={<TextForm title={'Transfer Order'} objectKey={'transfer-order'}/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
