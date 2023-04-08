import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '../context/context';

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
