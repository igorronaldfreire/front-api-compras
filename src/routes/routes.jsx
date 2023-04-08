import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/loginPage';
import Home from '../pages/Home/home';
import User from '../pages/User/userPage';
import { useAuth } from '../context/context';
import PrivateRoute from './routerPrivate';

export default function Rotas() {
  const { user } = useAuth();
  return (

    <Routes>
      <Route index element={<Login />} />
      <Route
        exact
        path="/home"
        element={(user ? <Home /> : <Login />)}
      />
      <Route
        exact
        path="/user"
        element={(
          <PrivateRoute>
            <User />
          </PrivateRoute>
        )}
      />
    </Routes>
  );
}
