/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react';
import './index.css';
import Routing from '../src/Router.jsx';
import { DataContext } from './Components/DataProvider/DataProvider.jsx';
import { auth } from './Utlity/Firebase.js';
import { Type } from './Utlity/Action.type.js';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useContext(DataContext);
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      localStorage.setItem('authUser', JSON.stringify(authUser));
      dispatch({
        type: Type.SET_USER,
        user: authUser
      });
    } else {
      localStorage.removeItem('authUser');
      dispatch({
        type: Type.SET_USER,
        user: null
      });
    }
  });

  return () => unsubscribe();
}, [dispatch]);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;