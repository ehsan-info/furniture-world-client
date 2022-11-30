import { createBrowserRouter, Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import page404 from '../../assets/page404.jpg';
import Blog from "../../Pages/Blog/Blog";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Welcome from "../../Pages/Dashboard/Welcome/Welcome";
import AdminRoute from "./AdminRoute/AdminRoute";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import DashboardLayout from "../../Layout/DashboardLayout";
import Categories from "../../Pages/Categories/Categories";
import CategoriesProducts from "../../Pages/Categories/CategoriesProducts";
import AddOrder from "../../Pages/Dashboard/AddOrder/AddOrder";
import Products from "../../Pages/Products/Products";
import ReportedList from "../../Pages/Dashboard/ReportedList/ReportedList";
import Payment from "../../Pages/Payment/Payment";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch(`http://localhost:5000/products`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories/catproducts/63845826cb0939a297bb244a',
                element: <Categories></Categories>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addorders/:id',
                element: <AddOrder></AddOrder>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/reporteditems/:id',
                element: <ReportedItems></ReportedItems>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/dashboard/reportedlist',
                element: <ReportedList></ReportedList>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/orders/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div className="hero min-h-screen" style={{
            background: `url(${page404})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">furnitureWorld</h1>
                    <p className="mb-5">Page Not Found Please Click the button to go Home Page</p>
                    <PrimaryButton><Link to='/'>Go To Home Page</Link></PrimaryButton>
                </div>
            </div>
        </div>
    }
]);
export default router;