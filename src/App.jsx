import React from 'react';
import './App.css';
import Rotas from './routes/routes';
import { AuthProvider } from './context/context';

function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}

export default App;
