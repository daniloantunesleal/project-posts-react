import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import { Home } from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

console.warn("O uso desse console pode permitir que invasores se façam passar por você e roubem suas informações usando um ataque chamado Self-XSS. Não insira ou cole códigos que você não entenda.")