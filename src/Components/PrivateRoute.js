// PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element: Component, isAuthenticated, ...props }) {
  return isAuthenticated ? (
    <Route {...props} element={<Component />} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default PrivateRoute;
