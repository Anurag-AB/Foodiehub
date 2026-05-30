import React, { lazy,Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
//import Grocery from './components/Grocery';
import UserContext from './utils/UserContext';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import Cart from './components/Cart';


//chunking
//code spliting
//dynamic bundling
//lazy loading
//on demand loading

const Grocery=lazy(()=>import("./components/Grocery")) ;



// App Layout
const AppLayout = () => {

const [userName,setUserName]=useState();

  //authntication
  useEffect(()=>{
    const data={
      name:"Anurag Behera"
    }
    setUserName(data.name);
  },[])

  return (
 <Provider store={appStore}>
  <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
  </UserContext.Provider>
</Provider>
  );
};

const appRouter=createBrowserRouter([ 
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
    path:"/",
    element:<Body/>
  },
      {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/grocery",
    element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
  }
    ],
    errorElement:<Error/>
  }
])

// Root Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
