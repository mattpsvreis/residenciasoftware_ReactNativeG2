CREATE TABLE public.categoria (
	id_categoria serial4 NOT NULL,
	nome_categoria varchar(255) NULL,
	imagem varchar(100) NULL,
	CONSTRAINT categoria_pkey PRIMARY KEY (id_categoria)
);

CREATE TABLE public.produto (
    id_produto serial4 NOT NULL,
    sku varchar(255) NULL,
    nome_produto varchar(255) NULL,
    id_fornecedor int8 NOT NULL,
    id_categoria int8 NOT NULL,
    imagem_produto varchar(255) NULL,
    CONSTRAINT produto_pkey PRIMARY KEY (id_produto),
    CONSTRAINT produto_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categoria(id_categoria),
    CONSTRAINT produto_id_fornecedor_fkey FOREIGN KEY (id_fornecedor) REFERENCES public.fornecedor(id_fornecedor)
);

ALTER TABLE produto ADD COLUMN preco_produto numeric(21,2);
ALTER TABLE produto ADD COLUMN descricao_produto varchar(255);