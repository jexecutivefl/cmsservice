import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import NavBar from "./Navbar/NavBar";

const MainLayout = ({ user, onSignOut, children }) => {


  return (
   <div style={mainLayoutStyles}>
     <Sidebar user={user} onSignOut={onSignOut}/>
     <div style={contentStyles}>
       <NavBar user={user} onSignOut={onSignOut} />
       <div style={{padding: '25px'}}>
         {children}
       </div>
     </div>
   </div>
  );
};

const mainLayoutStyles = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  overflow: 'hidden',
};

const contentStyles = {
  flexGrow: 1,
  marginLeft: '200px',
  backgroundColor: '#fafafa',
  overflowY: 'auto',
};

export default MainLayout;
