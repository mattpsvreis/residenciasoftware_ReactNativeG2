import React from 'react';
import Realm from 'realm';

import { AutenticacaoContext } from './AutenticacaoContext';

export const FavoritosContext = React.createContext({});

class FavoritosSchema extends Realm.Object { }
FavoritosSchema.schema = {
  name: 'Favorito',
  properties: {
    idProduto: { type: 'int', default: 0 },
    idUsuario: { type: 'int', default: 0 },
    sku: 'string',
    nomeProduto: 'string',
    descricaoProduto: 'string',
    precoProduto: 'double',
    imagemProduto: 'string',
  },
};

let realmFavoritos = new Realm({
  schema: [FavoritosSchema],
  schemaVersion: 1,
  path: 'ListaFavoritos',
});

export function FavoritosProvider({ children }: any) {
  const [favoritos, setFavoritos] = React.useState([]);
  const { usuario } = React.useContext(AutenticacaoContext);

  const listFavoritos = () => {
    return realmFavoritos
      .objects('Favorito')
      .filter(produto => produto.idUsuario == usuario.id);
  };

  const countFavoritos = () => {
    return realmFavoritos
      .objects('Favorito')
      .filter(produto => produto.idUsuario == usuario.id).length;
  };

  const addFavorito = (
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
        idUsuario: usuario.id,
        sku: _sku,
        nomeProduto: _nome,
        descricaoProduto: _descricao,
        precoProduto: _preco,
        imagemProduto: _imagem,
      });
    });
  };

  const removeFavorito = (_sku: string) => {
    realmFavoritos.write(() => {
      realmFavoritos.delete(
        realmFavoritos
          .objects('Favorito')
          .filter(
            produto => produto.sku == _sku && produto.idUsuario == usuario.id,
          ),
      );
    });
  };

  const resetFavoritos = () => {
    realmFavoritos.write(() => {
      realmFavoritos.delete(
        realmFavoritos
          .objects('Favorito')
          .filter(produto => produto.idUsuario == usuario.id),
      );
    });
  };

  return (
    <FavoritosContext.Provider
      value={{
        listFavoritos,
        addFavorito,
        removeFavorito,
        favoritos,
        setFavoritos,
        resetFavoritos,
        countFavoritos,
      }}>
      {children}
    </FavoritosContext.Provider>
  );
}