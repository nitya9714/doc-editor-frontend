import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';
import { useLocation } from 'react-router-dom';

const Protected = ({ children }) => {
  const location = useLocation();
  const { user ,setPre} = UserAuth();
  if (!user) {
    console.log(location.pathname);    
    setPre(location.pathname);   
    return <Navigate to='/login' />;
  }

  return children;
};

export default Protected;