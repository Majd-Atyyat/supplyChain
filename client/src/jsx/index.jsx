import React, { useContext  } from "react";

/// React router domy
import {  Routes, Route, Outlet } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import ScrollToTop from "./layouts/ScrollToTop";


/// Dashboard

import DashboardDark from "./components/Dashboard/DashboardDark";

import Crm from "./components/Dashboard/Crm";

import Blog from "./components/Dashboard/Blog";




// //Apps
import User from './components/AppsMenu/AppProfile/User';
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import AppProfile2 from "./components/AppsMenu/AppProfile/AppProfile2";
import EditProfile from "./components/AppsMenu/AppProfile/EditProfile";
// import AddRole from "./components/AppsMenu/AppProfile/AddRole";
// import PostDetails from "./components/AppsMenu/AppProfile/AddRole";
import CustomerProfile from "./components/AppsMenu/AppProfile/CustomerProfile";
import AppCustomer from "./components/AppsMenu/AppProfile/AppCustomer";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import Calendar from "./components/AppsMenu/Calendar/Calendar";










// pages
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";

import { ThemeContext } from "../context/ThemeContext";

const Markup = () => {   
  const allroutes = [
  // Dashboard
    { url: "", component: <Crm />},
    { url: "dashboard", component: <Crm /> },
    { url: "dashboard-dark", component: <DashboardDark/> },
   
    { url: "crm", component: <Crm /> },
 
    { url: "blog", component: <Blog /> },
  
 
    
  //Apps
   
    { url: "user", component: <User /> },   
    { url: "app-profile", component: <AppProfile /> },
    { url: "app-profile-2", component: <AppProfile2 /> },
    { url: "edit-profile", component: <EditProfile /> },
    // { url: "post-details", component: <AddRole /> },
    { url: "customer", component: <AppCustomer /> },
    { url: "customer-profile", component: <CustomerProfile /> },    
  // Apps  
    { url: "email-compose", component: <Compose /> },
    { url: "email-inbox", component: <Inbox /> },
    { url: "email-read", component: <Read /> },
    { url: "app-calender", component: <Calendar /> },

 

  


  
];

 
  function NotFound(){    
    const url = allroutes.map((route) => route.url);
    let path = window.location.pathname
    path = path.split('/')
    path = path[path.length - 1]    
      
    if(url.indexOf(path) <= 0){     
      return <Error404 />
    }
  }
   
    return (
      <>
          <Routes>              
              <Route path='/page-lock-screen' element= {<LockScreen />} />
              <Route path='/page-error-400' element={<Error400/>} />            
              <Route path='/page-error-403' element={<Error403/>} />
              <Route path='/page-error-404' element={<Error404/>} />
              <Route path='/page-error-500' element={<Error500/>} />
              <Route path='/page-error-503' element={<Error503/>} />     
              <Route  element={<MainLayout />} > 
                  {allroutes.map((data, i) => (
                    <Route
                      key={i}
                      exact
                      path={`${data.url}`}
                      element={data.component}
                    />
                    ))}
              </Route>                
              <Route path='*' element={<NotFound/>} />     
          </Routes>     
          <ScrollToTop />
      </>
    );       
};


  function MainLayout(){
    const { menuToggle , sidebariconHover} = useContext(ThemeContext);
    return (
      <div id="main-wrapper" className={`show ${sidebariconHover ? "iconhover-toggle": ""} ${ menuToggle ? "menu-toggle" : ""}`}>  
          <Nav />
          <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>          
            <Outlet />   
          </div>
        <Footer />
      </div>
    )
  };



export default Markup;
