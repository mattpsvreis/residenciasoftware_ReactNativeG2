import React from 'react';
import Routes from './routes';
import AutenticacaoProvider from './context/AutenticacaoContext';
import { FavoritosProvider } from './context/FavoritosContext';
import { CarrinhoProvider } from './context/CarrinhoContext';

export default () => {
  return (
    <AutenticacaoProvider>
      <FavoritosProvider>
        <CarrinhoProvider>
          <Routes />
        </CarrinhoProvider>
      </FavoritosProvider>
    </AutenticacaoProvider>
  );
}