import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";

import App from "../App";
import Dictionary from '../screens/Dictionary/DictionaryView';
import LandingPage from '../screens/LandingPage/LandingPage';

const basename = process.env.NODE_ENV === 'production' ? '/modulo7-recuperacion' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
              path: "/",
              element: <LandingPage />,
            },
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
            
            {
                path: '/dictionay',
                element: <Dictionary />,
            },
        ]
    }
],
    {
        basename:    basename
    }
);

export default routes;