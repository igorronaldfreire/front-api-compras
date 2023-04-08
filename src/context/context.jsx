import React, {
  createContext, useState, useContext, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import axios from '../services/axios';

// 1. Criar um contexto para gerenciar o estado do login
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const storagedIsUser = localStorage.getItem('user');
    const storagedToken = localStorage.getItem('token');

    if (storagedToken && storagedIsUser) {
      setUser(storagedIsUser);
      setToken(storagedToken);
      axios.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function login({ usuario, password }) {
    try {
      const response = await axios.post('/tokens', { usuario, password });

      setToken(response.data.token);
      setUser(response.data.user.usuario);
      axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      localStorage.setItem('user', response.data.user.usuario);
      localStorage.setItem('token', response.data.token);
        <Navigate to="/home" />;
    } catch (e) {
      console.log(e);
    }
  }

  function logout() {
    setUser('');
    setToken('');
  }

  const valueAuthProvider = React.useMemo(() => ({
    user,
    token,
    login,
    logout,
  }), [user]);

  return (
    <AuthContext.Provider value={valueAuthProvider}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.any]).isRequired,
};
