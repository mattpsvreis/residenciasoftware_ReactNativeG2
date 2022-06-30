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

INSERT INTO categoria (NOME_CATEGORIA,IMAGEM) VALUES
	 ('Camisas','https://i.imgur.com/XrCEQ8w.png'),
	 ('Calças','https://i.imgur.com/Hma9LJv.png'),
	 ('Bermudas & Shorts','https://i.imgur.com/bgRyis7.png'),
	 ('Casacos','https://i.imgur.com/4KduAkc.png'),
	 ('Calçados','https://i.imgur.com/vXP9Idb.png');
	 
	 // 1: Camisas | 2: Calças | 3: Bermudas | 4: Casacos | 5: Calçados
	 
INSERT INTO produto (SKU,NOME_PRODUTO,ID_FORNECEDOR,ID_CATEGORIA,IMAGEM_PRODUTO,PRECO_PRODUTO,DESCRICAO_PRODUTO) VALUES
     ('C1','Camiseta Star Wars',1,1,'https://i.imgur.com/ll1Fgke.jpg',80.0,'Camisa Geek Tema StarWars'),
     ('CL1','Calça Sarja',1,2,'https://i.imgur.com/FjOW4d7.jpg', 120.0, 'Calça Sarja Caqui'),
     ('BM1','Bermuda Azul',1,3,'https://i.imgur.com/0rWqIbC.jpg', 75.0, 'Bermuda Cargo Azul');