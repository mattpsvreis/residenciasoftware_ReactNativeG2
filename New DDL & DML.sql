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
	 
INSERT INTO produto (SKU,NOME_PRODUTO,ID_FORNECEDOR,ID_CATEGORIA,IMAGEM_PRODUTO,PRECO_PRODUTO,DESCRICAO_PRODUTO) VALUES
     ('CMS1','Camiseta May His Force Be With You',1,1,'https://i.imgur.com/tJUJpxp.jpg', 140.0,'Camiseta geek May His Force Be With You tema Star Wars'),
	 ('CMS2','Camiseta Star Wars',1,1,'https://i.imgur.com/ll1Fgke.jpg', 120.0,'Camiseta geek tema Star Wars'),
	 ('CMS3','Camiseta Itachi Uchiha',1,1,'https://i.imgur.com/vqS43gR.jpg', 110.0,'Camiseta anime Itachi Uchiha tema Naruto'),
	 ('CMS4','Camiseta Rick',1,1,'https://i.imgur.com/GgFl7ej.jpg', 50.0,'Camiseta geek Rick tema Rick & Morty'),
	 ('CMS5','Camiseta Off-Line',1,1,'https://i.imgur.com/OKggRlw.jpg', 75.0,'Camiseta geek Off-Line tema Nerd jogo do dinossauro internet offline google chrome'),
	 ('CMS6','Camiseta Hacker',1,1,'https://i.imgur.com/cP507u6.jpg', 60.0,'Camiseta geek Hacker tema Hacker referência elementos químicos'),
	 ('CLC1','Calça Star Wars',1,2,'https://i.imgur.com/wltiCIK.jpg', 95.0,'Calça geek tema Star Wars'),
	 ('CLC2','Calça Nasa',1,2,'https://i.imgur.com/9ccHmr0.jpg', 125.0,'Calça de moletom tipo jogger da Nasa preto'),
	 ('CLC3','Calça Alien',1,2,'https://i.imgur.com/piqKLTW.jpg', 100.0,'Calça de moletom slim geek tema Alien'),
	 ('CLC4','Calça Boku No Hero',1,2,'https://i.imgur.com/zy8WxWR.jpg', 110.0,'Calça de moletom anime tema Boku No Hero'),
	 ('CLC5','Calça Free Fire',1,2,'https://i.imgur.com/i2pJBcz.jpg', 135.0,'Calça de moletom jogos tema Free Fire'),
	 ('CLC6','Calça Attack on Titan',1,2,'https://i.imgur.com/oRz4GnT.png', 150.0,'Calça de moletom anime tema Attack on Titan'),
	 ('BS1','Shorts Mario',1,3,'https://i.imgur.com/6QtI1Qu.png', 70.0,'Shorts jogos tema Mario'),
	 ('BS2','Shorts Playstation',1,3,'https://i.imgur.com/m4FzLQO.png', 70.0,'Shorts jogos tema Playstation'),
	 ('BS3','Shorts Akatsuki',1,3,'https://i.imgur.com/gULpLLN.png', 70.0,'Shorts anime Akatsuki tema Nartuo'),
	 ('BS4','Bermuda Alien',1,3,'https://i.imgur.com/hlM5c99.png', 70.0,'Bermuda geek tema Alien'),
	 ('BS5','Shorts Star Wars',1,3,'https://i.imgur.com/XQgU9O6.png', 70.0,'Shorts geek tema Star Wars'),
	 ('BS6','Bermuda Munição',1,3,'https://i.imgur.com/GmNLnwI.png', 70.0,'Bermuda geek tema Munição'),
	 ('CSC1','Casaco VaporWave',1,4,'https://i.imgur.com/vwd5oa8.png', 170.0,'Casaco moletom geek tema VaporWave'),
	 ('CSC2','Casaco Akame Ga Kill',1,4,'https://i.imgur.com/4EJm4VE.png', 130.0,'Casaco moletom geek tema Akame Ga Kill'),
	 ('CSC3','Jaqueta Umbrella Corporation',1,4,'https://i.imgur.com/nZEGvtC.png', 140.0,'Jaqueta moletom geek tema Umbrella Corporation'),
	 ('CSC4','Casaco Kimetsu no Yaiba',1,4,'https://i.imgur.com/afXAEfO.png', 120.0,'Casaco moletom geek tema Kimetsu no Yaiba'),
	 ('CSC5','Casaco Boba Fett',1,4,'https://i.imgur.com/Afr0RLg.png', 180.0,'Casaco moletom do Boba Fett geek tema Star Wars'),
	 ('CSC6','Casaco Dio Brando',1,4,'https://i.imgur.com/oJexexw.png', 110.0,'Casaco moletom do Dio Brando geek tema JoJo Bizarre Adventure'),
	 ('AD1','Pantufa Darth Vader',1,5,'https://i.imgur.com/moW2LmM.png', 80.0,'Pantufa Darth Vader geek tema Star Wars'),
	 ('AD2','Sapatênis Mario',1,5,'https://i.imgur.com/dBMeoXW.png', 110.0,'Sapatênis geek tema Super Mario'),
	 ('AD3','Tênis Akatsuki',1,5,'https://i.imgur.com/UHx29Pd.png', 160.0,'Tênis de cano alto Akatsuki geek tema Naruto'),
	 ('AD4','Sapatênis Fantasmas',1,5,'https://i.imgur.com/QJU6KJn.png', 110.0,'Sapatênis Fantasmas jogos tema Pac-Man'),
	 ('AD5','Pantufa B99',1,5,'https://i.imgur.com/SEG2kft.png', 90.0,'Pantufa B99 geek tema Brooklyn Nine-Nine'),
	 ('AD6','Pantufa Game Over',1,5,'https://i.imgur.com/JyOPwh7.png', 100.0,'Pantufa jogos tema Game Over');