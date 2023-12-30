// // ProtectedRoute.jsx
// import React, { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { UserContext } from '../content/UserProvider';

// const ProtectedRoute = ({ element, ...props }) => {
//   const { token } = useContext(UserContext);

//   return token ? (
//     <Route {...props} element={element} />
//   ) : (
//     <Navigate to="/register" replace />
//   );
// };

// export default ProtectedRoute;


import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props){
  const { token, redirectTo, children } = props
  return token ? children : <Navigate to={redirectTo}/> 
}