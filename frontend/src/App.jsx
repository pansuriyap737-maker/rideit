import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // use react-router-dom for browser apps

import Header from "./Components/Includes/Header";
import Home from "./Components/User/Home";
import Footer from "./Components/Includes/Footer";
import About from "./Components/User/About";
import Contact from "./Components/User/Contact";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import Dashboard from "./Components/User/Dashboard";
import Header1 from "./Components/Includes/Header1";
import Bookrides from "./Components/User/Bookrides";
import Myprofile from "./Components/User/Myprofile";
import Payment from "./Components/User/Payment";
import Adminheader from "./Components/Admin/Adminheader";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AdminProfile from "./Components/Admin/AdminProfile";
import AdminInquiries from "./Components/Admin/AdminInquiries";
import ManageUsers from "./Components/Admin/ManageUser";
import ManageCars from "./Components/Admin/ManageCars";
import ManageDriver from "./Components/Admin/ManageDriver";
import UserPayment from "./Components/Admin/UserPayment";
import Header2 from "./Components/Includes/Header2";
import Shareride from "./Components/Driver/Shareride";
import RideDetails from "./Components/Driver/RideDetails";
import PendingRides from "./Components/Driver/PendingRides";
import EditRide from "./Components/Driver/EditRide";
import DriverBookings from "./Components/Driver/DriverBookings";
import DriverProfile from "./Components/Driver/DriverProfile";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    ),
  },

  {
    path: '/about',
    element: (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    ),
  },

  {
    path: '/contact',
    element: (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    ),
  },

  {
    path: '/login',
    element: (
      <div>
        <Header />
        <Login />
        <Footer />
      </div>
    ),
  },

  {
    path: '/register',
    element: (
      <div>
        <Header />
        <Register />
        <Footer />
      </div>
    ),
  },

  {
    path: '/user/dashboard',
    element: (
      <div>
        <Header1 />
        <Dashboard />
        <Footer />
      </div>
    ),
  },

  {
    path: '/user/bookrides',
    element: (
      <div>
        <Header1 />
        <Bookrides />
        <Footer />
      </div>
    ),
  },

   {
    path: '/user/user_profile',
    element: (
      <div>
        <Header1 />
        <Myprofile />
        <Footer />
      </div>
    ),
  },

  {
    path: '/user/bookings',
    element: (
      <div>
        <Header1 />
        <Payment />
        <Footer />
      </div>
    ),
  },

  {
    path: '/admin/admin_dashboard',
    element: (
      <div>
        <Adminheader />
        <AdminDashboard />
      </div>
    ),
  },

  {
    path: '/admin/admin_dashboard/admin_profile',
    element: (
      <div>
        <Adminheader />
        <AdminProfile />
      </div>
    ),
  },

   {
    path: '/admin/admin_dashboard/admin_inquiries',
    element: (
      <div>
        <Adminheader />
        <AdminInquiries />
      </div>
    ),
  },

  {
    path: '/admin/manage_user',
    element: (
      <div>
        <Adminheader />
        <ManageUsers />
      </div>
    ),
  },

  {
    path: '/admin/manage_cars',
    element: (
      <div>
        <Adminheader />
        <ManageCars />
      </div>
    ),
  },

  {
    path: '/admin/manage_driver',
    element: (
      <div>
        <Adminheader />
        <ManageDriver />
      </div>
    ),
  },

  {
    path: '/admin/user_payment',
    element: (
      <div>
        <Adminheader />
        <UserPayment />
      </div>
    ),
  },

   {
    path: '/driver/share_ride',
    element: (
      <div>
        <Header2 />
        <Shareride />
        <Footer />
      </div>
    ),
  },

   {
    path: '/driver/ride_details',
    element: (
      <div>
        <Header2 />
        <RideDetails />
        <Footer />
      </div>
    ),
  },

   {
    path: '/driver/pending_rides',
    element: (
      <div>
        <Header2 />
        <PendingRides />
        <Footer />
      </div>
    ),
  },

  {
    path: '/driver/edit_ride',
    element: (
      <div>
        <EditRide />
      </div>
    ),
  },

  {
    path: '/driver/driver_bookings',
    element: (
      <div>
        <Header2 />
        <DriverBookings />
        <Footer />
      </div>
    ),
  },

   {
    path: '/driver/driver_profile',
    element: (
      <div>
        <Header2 />
        <DriverProfile />
        <Footer />
      </div>
    ),
  },


]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
