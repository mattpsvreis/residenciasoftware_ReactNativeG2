import React, { createContext, useState } from 'react';
import Realm from 'realm';

export const FavoritosContext = createContext({});

class FavoritosSchema extends Realm.Object { }
FavoritosSchema.schema = {
  name: 'Favorito',
  properties: {
    idProduto: { type: 'int', default: 0 },
    sku: 'string',
    nomeProduto: 'string',
    descricaoProduto: 'string',
    precoProduto: 'double',
    imagemProduto: 'string',
    quantidade: { type: 'int', default: 1 },
  },
};

let realmFavoritos = new Realm({
  schema: [FavoritosSchema],
  schemaVersion: 1,
  path: 'ListaFavoritos',
});

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const listFavoritos = () => {
    return realmFavoritos.objects('Favorito');
  };

  const addFavoritos = (
    _sku: string,
    _nome: string,
    _descricao: string,
    _preco: number,
    _imagem: string,
  ) => {
    const lastProductRegistered = realmFavoritos
      .objects('Favorito')
      .sorted('idProduto', true)[0];
    const lastIdRegistered =
      lastProductRegistered == null ? 0 : lastProductRegistered.idProduto;
    const nextId =
      lastProductRegistered == null ? 1 : lastIdRegistered + 1;
    realmFavoritos.write(() => {
      const produto = realmFavoritos.create('Favorito', {
        idProduto: nextId,
        sku: _sku,
        nomeProduto: _nome,
        descricaoProduto: _descricao,
        precoProduto: _preco,
        imagemProduto: _imagem,
        quantidade: 1,
      });
    });
  };

  const removeFavoritos = (_id: number) => {
    realmFavoritos.write(() => {
      realmFavoritos.delete(
        realmFavoritos
          .objects('Favorito')
          .filter(produto => produto.idProduto == _id),
      );
    });
  };

  const resetFavoritos = () => {
    realmFavoritos.write(() => {
      realmFavoritos.deleteAll();
    });
  };

  return (
    <FavoritosContext.Provider
      value={{
        listFavoritos,
        addFavoritos,
        removeFavoritos,
        favoritos,
        setFavoritos,
        resetFavoritos,
      }}>
      {children}
    </FavoritosContext.Provider>
  );
}