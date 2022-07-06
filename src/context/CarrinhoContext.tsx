import React from 'react';
import Realm from 'realm';

export const CarrinhoContext = React.createContext({});

class ProdutoSchema extends Realm.Object { }
ProdutoSchema.schema = {
    name: 'Produto',
    properties: {
        id_produto: { type: 'int', default: 0 },
        sku: 'string',
        nome_produto: 'string',
        descricao_produto: 'string',
        preco_produto: 'double',
        imagem_produto: 'string',
        quantidade: { type: 'int', default: 1 },
    },
};

let realmCarrinho = new Realm({
    schema: [ProdutoSchema],
    schemaVersion: 1,
    path: 'Carrinho',
});

export function CarrinhoProvider({ children }: any) {
    const [produtos, setProdutos] = React.useState([]);

    const listProdutos = () => {
        return realmCarrinho.objects('Produto');
    };

    const countProdutos = () => {
        return realmCarrinho.objects('Produto').length;
    };

    const addProduto = (
        _sku: string,
        _nome: string,
        _descricao: string,
        _preco: number,
        _imagem: string,
    ) => {
        const ultimoProdutoCadastrado = realmCarrinho
            .objects('Produto')
            .sorted('id_produto', true)[0];
        const ultimoIdCadastrado =
            ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.id_produto;
        const proximoId =
            ultimoProdutoCadastrado == null ? 1 : ultimoIdCadastrado + 1;
        realmCarrinho.write(() => {
            const produto = realmCarrinho.create('Produto', {
                id_produto: proximoId,
                sku: _sku,
                nome_produto: _nome,
                descricao_produto: _descricao,
                preco_produto: _preco,
                imagem_produto: _imagem,
                quantidade: 1,
            });
        });
    };

    const removeProduto = (_id: number) => {
        realmCarrinho.write(() => {
            realmCarrinho.delete(
                realmCarrinho
                    .objects('Produto')
                    .filter(produto => produto.id_produto == _id),
            );
        });
    };

    const addQuantity = (_sku: string) => {
        realmCarrinho.write(() => {
            realmCarrinho
                .objects('Produto')
                .filter(produto => produto.sku == _sku)
                .forEach(res => (res.quantidade += 1));
        });
    };

    const reduceQuantity = (_sku: string) => {
        realmCarrinho.write(() => {
            realmCarrinho
                .objects('Produto')
                .filter(produto => produto.sku == _sku)
                .forEach(res => (res.quantidade -= 1));
        });
    };

    const resetCarrinho = () => {
        realmCarrinho.write(() => {
            realmCarrinho.deleteAll();
        });
    };

    return (
        <CarrinhoContext.Provider
            value={{
                listProdutos,
                countProdutos,
                addProduto,
                removeProduto,
                produtos,
                setProdutos,
                addQuantity,
                reduceQuantity,
                resetCarrinho,
            }}>
            {children}
        </CarrinhoContext.Provider>
    );
}