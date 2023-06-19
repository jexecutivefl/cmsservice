import React from 'react';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5c5858',
    color: 'white',
  },
  select: {
    marginRight: '20px',
    padding: '5px',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
};

const NavBar = ({ onSignOut }) => {



  return (
   <nav style={styles.nav}>
     <div>
       <button style={styles.button} onClick={onSignOut}>
         Sign out
       </button>
     </div>
   </nav>
  );
};

export default NavBar;
