import Index from "./components/Pages/Dashboard";
import { Provider } from 'react-redux';
import store from './store';
import Root from "./components/Root/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllCreditCards from "./components/Pages/Dashboard/Card/AllCreditCard/AllCreditCards";
import Setting from "./components/Pages/Setting/Setting";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Root />,
      children: [ 
        {
          path: "/settings",
          element: <Setting/>
        },
        {
          index: true, 
          element: <Index />,
        },
        {
          path: "/AllCreditCards",
          element: <AllCreditCards />
        },
        {
          path: "/contact",
          element: <h1>Contact</h1>
        }
      ]
    },
  ]);

  return (  
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
