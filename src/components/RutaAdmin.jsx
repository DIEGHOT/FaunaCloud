import React from 'react';
import { Navigate } from 'react-router-dom';
import { esAdmin } from '../utils/auth';

function RutaAdmin({ children }) {
  if (!esAdmin()) {
    return <Navigate to="/catalogo" replace />;
  }
  return children;
}

export default RutaAdmin;