import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import AutenticacaoProvider from './context/AutenticacaoContext';

export default () => {
  return (
    <AutenticacaoProvider>
      <Routes/>
    </AutenticacaoProvider>
  );
}