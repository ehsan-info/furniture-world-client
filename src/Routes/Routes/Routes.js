import { createBrowserRouter, Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import page404 from '../../assets/page404.jpg';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
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