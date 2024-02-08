Lista de Exercícios


Nível Baixo

- [x] 1) Crie uma nova procedure com o nome "ListarLivrosPorAutor".
Passos:
Declare um parâmetro de entrada para o CPF do autor, por exemplo, p_cpf IN NUMBER.
Dentro da procedure, use uma estrutura de Cursor FOR Loop para percorrer os registros na tabela Livro_Autoria e identificar os livros associados ao CPF do autor.
Para cada livro encontrado, recupere o título correspondente da tabela Livro e exiba-o usando a função DBMS_OUTPUT.PUT_LINE.


- [x] 2) Nesta tarefa, você irá criar uma função em PL/SQL que receberá como entrada o código de uma editora e retornará o nome correspondente dessa editora. Isso ajudará você a praticar a criação de funções simples para recuperar informações específicas de uma base de dados.
Passos:
Crie uma nova função com o nome "ObterNomeEditora".
Declare um parâmetro de entrada para o código da editora, por exemplo, p_codeditora IN NUMBER.
Declare uma variável para armazenar o nome da editora, por exemplo, v_nome_editora VARCHAR2(100).
Use uma cláusula SELECT para buscar o nome da editora correspondente na tabela Editora, com base no código fornecido.
Atribua o resultado da consulta à variável v_nome_editora.
Encerre a função retornando o valor da variável v_nome_editora.

- [x] 3) Nesta tarefa, você irá criar um trigger em PL/SQL que será acionado automaticamente ao inserir um novo livro na tabela Livro. 
O trigger registrará uma linha na tabela Auditoria com o preço antigo como NULL. 
Isso permitirá que você pratique a criação de triggers simples para monitorar e registrar alterações em uma base de dados.
Passos:
Crie um novo trigger com o nome "InserirNaAuditoria".
Defina o gatilho para ser acionado após a inserção em Livro.
Dentro do corpo do trigger, insira uma linha na tabela Auditoria, definindo o codlivro, precoantigo como NULL e preconovo com o valor correspondente ao novo livro.
Utilize a função SYSDATE para obter a data e hora atual para a coluna datahora.


Nível Intermediário

- [x] 4) Nesta tarefa, você irá criar uma procedure em PL/SQL que recebe o CNPJ de uma loja, 
o CPF de um cliente, o código de um livro vendido e a quantidade vendida. 
A procedure deverá registrar a venda, calculando o valor total da venda com base no preço do livro 
e na quantidade vendida. Isso permitirá que você pratique a criação de procedures mais complexas 
envolvendo cálculos e inserção de dados em várias tabelas.
Passos:
Crie uma nova procedure com o nome "RegistrarVenda".
Declare os parâmetros de entrada: p_cnpj_loja IN NUMBER, p_cpf_cliente IN NUMBER, p_codlivro IN NUMBER e p_quantidade IN NUMBER.
Declare variáveis locais para armazenar o preço do livro, o valor total da venda e a data e hora da venda.
Use uma cláusula SELECT para obter o preço do livro da tabela Livro com base no p_codlivro.
Calcule o valor total da venda multiplicando o preço do livro pela quantidade vendida.
Use a função SYSDATE para obter a data e hora atual para a coluna datavenda na tabela Venda.
Insira uma nova linha na tabela Venda com as informações fornecidas e o valor total calculado.


- [ ] 5) Nesta tarefa, você irá criar uma procedure em PL/SQL que, para um determinado livro, calcula a média dos preços antigos e novos registrados na tabela de auditoria. A procedure receberá o código do livro como entrada e deverá retornar as médias calculadas. Isso permitirá que você pratique a criação de procedures que realizam cálculos complexos e retornam valores.
Passos:
Crie uma nova procedure com o nome "CalcularMediaPrecosAuditoria".
Declare o parâmetro de entrada: p_codlivro IN NUMBER.
Declare variáveis locais para armazenar as somas dos preços antigos e novos, o número de registros e as médias calculadas.
Use uma cláusula SELECT para obter a soma dos preços antigos e novos da tabela Auditoria com base no p_codlivro.
Use a função COUNT para obter o número de registros na tabela de auditoria para o livro específico.
Calcule as médias dos preços antigos e novos dividindo as somas pelas contagens.
Retorne as médias calculadas usando a cláusula OUT nos parâmetros.


- [ ] 6) Nesta tarefa, você irá criar uma função em PL/SQL que, dado o CPF de um cliente, calculará o total de compras realizadas por esse cliente. A função deverá retornar o valor total das compras. Isso permitirá que você pratique a criação de funções que agregam e calculam informações específicas de uma base de dados.
Passos:
Crie uma nova função com o nome "CalcularTotalComprasPorCliente".
Declare o parâmetro de entrada: p_cpf_cliente IN NUMBER.
Declare uma variável local para armazenar o valor total das compras.
Use uma cláusula SELECT para calcular a soma do valor total das compras da tabela Venda com base no p_cpf_cliente.


- [ ] 7) Nesta tarefa, você irá criar uma função em PL/SQL que, dado o CNPJ de uma loja, 
calcular a média de preços dos livros vendidos por essa loja. 
A função deverá retornar a média calculada. Isso permitirá que você pratique a criação de funções que agregam informações específicas de uma base de dados.
Passos:
Crie uma nova função com o nome "CalcularMediaPrecosLivrosPorLoja".
Declare o parâmetro de entrada: p_cnpj_loja IN NUMBER.
Declare uma variável local para armazenar a média de preços.
Use uma cláusula SELECT para calcular a média dos preços dos livros vendidos pela loja da tabela Venda e Livro com base no p_cnpj_loja.


- [ ] 8) Nesta tarefa, você irá criar um trigger em PL/SQL que será acionado automaticamente ao atualizar o preço de um livro na tabela Livro. O trigger registrará uma linha na tabela Auditoria com os preços antigo e novo. Isso permitirá que você pratique a criação de triggers que monitoram alterações específicas e registram informações relevantes em uma tabela de auditoria.
Passos:
Crie um novo trigger com um nome significativo, como "TriggerAuditoriaAtualizacaoPreco".
Defina o gatilho para ser acionado após uma atualização na tabela Livro.
Dentro do corpo do trigger, utilize a cláusula OLD para acessar o valor antigo do preço e a cláusula NEW para acessar o valor novo.
Insira uma nova linha na tabela Auditoria com os valores antigo e novo do preço, a data e hora da atualização e o código do livro.


- [ ] 9) Nesta tarefa, você irá criar um cursor em PL/SQL que listará os clientes que fizeram mais de uma compra na tabela Venda. A ideia é percorrer os registros na tabela e identificar os clientes que têm mais de uma entrada associada a eles. Isso permitirá que você pratique a criação e uso de cursores para percorrer dados e aplicar condições específicas.
Passos:
Crie um novo cursor com um nome significativo, como "CursorClientesMaisDeUmaCompra".
Declare uma variável que representará o cursor, por exemplo, CURSOR c_clientes...
Use uma cláusula SELECT para selecionar os dados necessários da tabela Venda. Você deve agrupar os dados por cpf (CPF do cliente) e usar a função HAVING para filtrar apenas os clientes que têm mais de uma entrada.
Abra o cursor usando o comando OPEN.
Use um loop FOR para percorrer os registros retornados pelo cursor.
Dentro do loop, utilize a instrução FETCH para obter cada registro.
Exiba ou armazene as informações do cliente apropriadas, como o CPF, usando a função DBMS_OUTPUT.PUT_LINE.
Após percorrer todos os registros, feche o cursor usando o comando CLOSE.


- [ ] 10) Nesta tarefa, você irá criar um cursor em PL/SQL que listará os livros vendidos por uma determinada loja dentro de um período de tempo específico na tabela Venda. O objetivo é percorrer os registros na tabela e identificar os livros vendidos pela loja e dentro do intervalo de datas. Isso permitirá que você pratique a criação e uso de cursores para percorrer dados e aplicar múltiplas condições.
Passos:
Crie um novo cursor com um nome significativo, como "CursorLivrosVendidosPorLoja".
Declare variáveis que representarão o cursor e os dados do registro, por exemplo, CURSOR c_livros...
Use uma cláusula SELECT para selecionar os dados necessários da tabela Venda e Livro. Você deve usar as tabelas Venda e Livro e aplicar condições para a loja e o intervalo de datas desejados.
Abra o cursor usando o comando OPEN.
Use um loop FOR para percorrer os registros retornados pelo cursor.
Dentro do loop, utilize a instrução FETCH para obter cada registro.
Exiba ou armazene as informações do livro apropriadas, como o título, usando a função DBMS_OUTPUT.PUT_LINE.
Após percorrer todos os registros, feche o cursor usando o comando CLOSE.


- [ ] 11) Nesta tarefa, você irá criar um cursor em PL/SQL que listará os livros de uma determinada editora juntamente com seus títulos e preços atuais da tabela Livro. O objetivo é percorrer os registros na tabela e identificar os livros da editora específica, mostrando seus títulos e preços atuais. Isso permitirá que você pratique a criação e uso de cursores para percorrer dados e selecionar informações relevantes.
Passos:
Crie um novo cursor com um nome significativo, como "CursorLivrosEditora".
Declare variáveis que representarão o cursor e os dados do registro, por exemplo, CURSOR c_livros...
Use uma cláusula SELECT para selecionar os dados necessários da tabela Livro. Você deve usar a tabela Livro e aplicar uma condição para a editora desejada.
Abra o cursor usando o comando OPEN.
Use um loop FOR para percorrer os registros retornados pelo cursor.
Dentro do loop, utilize a instrução FETCH para obter cada registro.
Exiba ou armazene as informações do livro apropriadas, como título e preço, usando a função DBMS_OUTPUT.PUT_LINE.
Após percorrer todos os registros, feche o cursor usando o comando CLOSE.


---

# Base de dados

```
CREATE TABLE Editora (
codeditora number(10),
nome varchar2(100) NOT NULL,
CONSTRAINT edi_codeditora_pk PRIMARY KEY(codeditora));

CREATE TABLE Assunto (
sigla char(1),
assunto varchar2(100) NOT NULL,
CONSTRAINT ass_sigla_pk PRIMARY KEY(sigla));

CREATE TABLE Livro (
titulo varchar2(50) NOT NULL,
datapublicacao Date,
codlivro number(10),
numpags number(4),
preco number(6,2),
codeditora number(10)NOT NULL,
sigla char(1)NOT NULL,
CONSTRAINT liv_codlivro_pk PRIMARY KEY(codlivro),
CONSTRAINT liv_edi__codeditora_fk FOREIGN KEY(codeditora) REFERENCES EDITORA(codeditora),
CONSTRAINT liv_ass_sigla_fk FOREIGN KEY(sigla) REFERENCES ASSUNTO(sigla));


CREATE TABLE Autor (
CPF number(10) NOT NULL,
datanasc date,
nome varchar2(150) NOT NULL,
nacionalidade varchar2(100),
matricula number(10),
CONSTRAINT aut_matricula_pk PRIMARY KEY(matricula),
CONSTRAINT aut_cpf_uk UNIQUE(cpf));


CREATE TABLE Livro_autoria (
codlivro number(10) NOT NULL,
matricula number(10) NOT NULL,
CONSTRAINT livaut_aut_matricula_fk FOREIGN KEY(matricula) REFERENCES AUTOR(matricula)
CONSTRAINT livaut_liv_codlivro_fk FOREIGN KEY(codlivro) REFERENCES LIVRO(codlivro),
);



CREATE TABLE Loja (
CNPJ number(10),
nome varchar2(150) NOT NULL,
CONSTRAINT loj_cnpj_pk PRIMARY KEY(cnpj));


CREATE TABLE CARTAO(
        codcartao number(10),
        tipocartao varchar2(20),
        CONSTRAINT car_codcar_pk primary key(codcartao));


CREATE TABLE Cliente (
CPF number(10),
datanasc date,
nome varchar2(150) NOT NULL,
nacionalidade varchar2(100),
codcartao number(10),
CONSTRAINT aut_cpf_pk PRIMARY KEY(cpf),
CONSTRAINT car_cli_codcart_fk FOREIGN KEY(codcartao) REFERENCES CARTAO(codcartao));


CREATE TABLE Venda (
idvenda number(10),
quantidade number(5) NOT NULL,
total number(6,2),
datavenda date,
CNPJ number(10) NOT NULL,
codlivro number(10),
cpf number(10) NOT NULL,
CONSTRAINT ven_codlivro_pk PRIMARY KEY(idvenda, codlivro),
CONSTRAINT ven_liv_codlivro_fk FOREIGN KEY(codlivro) REFERENCES LIVRO(codlivro),
CONSTRAINT ven_loj_cnpj_fk FOREIGN KEY(cnpj) REFERENCES LOJA(cnpj),
CONSTRAINT ven_cli_cpf_fk FOREIGN KEY(cpf) REFERENCES CLIENTE(cpf));

CREATE TABLE EDITORAAUX(
CODEDITORA CHAR(10),
NOME VARCHAR2(100),
CONSTRAINT edi_codeditora2_pk primary key(codeditora)

);

CREATE TABLE LOG(usuario varchar2(100), datahora varchar2(25));

CREATE TABLE AUDITORIA(
                      codlivro number(10),
                      precoantigo number(6,2),
                      preconovo number(6,2),
                      datahora varchar2(25)
                      );


--COMANDOS DML - POPULANDO O BANCO DE DADOS

--TABELA EDITORA

INSERT INTO EDITORA(codeditora, nome) VALUES(1,'MIRANDELA EDITORA');
INSERT INTO EDITORA(codeditora, nome) VALUES(2,'EDITORA VIA-NORTE');
INSERT INTO EDITORA(codeditora, nome) VALUES(3,'EDITORA ILHAS TIJUCA');
INSERT INTO EDITORA(codeditora, nome) VALUES(4,'MARIA JOSÉ EDITORA');

--TABELA ASSUNTO

INSERT INTO ASSUNTO(sigla, assunto)  VALUES('B','banco de dados');
INSERT INTO ASSUNTO(sigla, assunto)  VALUES('P', 'programação');
INSERT INTO ASSUNTO(sigla, assunto)  VALUES('R', 'redes');
INSERT INTO ASSUNTO(sigla, assunto)  VALUES('S', 'sistemas operacionais');


--TABELA LIVRO

INSERT INTO LIVRO(codlivro, preco, numpags, titulo, datapublicacao, codeditora, sigla) VALUES (1, 31.25, 55, 'BANCO DE DADOS PARA A WEB', TO_DATE('10/01/1999','DD/MM/YYYY'), 1, 'B');
INSERT INTO LIVRO(codlivro, preco, numpags, titulo, datapublicacao, codeditora, sigla) VALUES (2, 30.55, 47, 'PROGRAMANDO EM LINGUAGEM C', TO_DATE('01/10/1997','DD/MM/YYYY'), 1, 'P');
INSERT INTO LIVRO(codlivro, preco, numpags, titulo, datapublicacao, codeditora, sigla) VALUES (3, 111.52, 103, 'PROGRAMANDO EM LINGUAGEM C++', TO_DATE('01/11/1998','DD/MM/YYYY'), 3, 'P');
INSERT INTO LIVRO(codlivro, preco, numpags, titulo, datapublicacao, codeditora, sigla) VALUES (4, 48.99, 66, 'BANCO DE DADOS NA BIOINFORMATICA','', 2, 'B');
INSERT INTO LIVRO(codlivro, preco, numpags, titulo, datapublicacao, codeditora, sigla) VALUES (5, 42.20, 93, 'REDES DE COMPUTADORES', TO_DATE('01/09/1996','DD/MM/YYYY'), 2, 'R');


--TABELA AUTOR

INSERT INTO AUTOR(matricula, cpf, datanasc, nome, nacionalidade) VALUES(111, 890001, TO_DATE('08/08/1978','DD/MM/YYYY'), 'Luciano Blomberg', 'Brasileira');
INSERT INTO AUTOR(matricula, cpf, datanasc, nome, nacionalidade) VALUES(112, 780002, TO_DATE('23/03/1959','DD/MM/YYYY'), 'Carlos Padilha', 'Brasileira');
INSERT INTO AUTOR(matricula, cpf, datanasc, nome, nacionalidade) VALUES(113, 920003, TO_DATE('11/12/1981','DD/MM/YYYY'), 'Ana Silveira Escobar', 'Colombiana');
INSERT INTO AUTOR(matricula, cpf, datanasc, nome, nacionalidade) VALUES(114, 810004, TO_DATE('01/11/1963','DD/MM/YYYY'), 'César Oliveira', 'Brasileira');
INSERT INTO AUTOR(matricula, cpf, datanasc, nome, nacionalidade) VALUES(115, 820005, TO_DATE('25/04/1965','DD/MM/YYYY'), 'Marcos Andrade', 'Brasileira');
INSERT INTO AUTOR(matricula, cpf, datanasc, nome, nacionalidade) VALUES(116, 890006, TO_DATE('13/08/1979','DD/MM/YYYY'), 'Carla Maldonado Silva', 'Brasileira');
INSERT INTO AUTOR(matricula, cpf, datanasc, nome, nacionalidade) VALUES(117, 780007, TO_DATE('24/05/1959','DD/MM/YYYY'), 'Carlos Tenório', 'Equatoriana');
INSERT INTO AUTOR(matricula, cpf, datanasc, nome, nacionalidade) VALUES(118, 770008, TO_DATE('29/11/1960','DD/MM/YYYY'), 'Maria Fonseca', 'Brasileira');



--TABELA LIVRO_AUTORIA

INSERT INTO LIVRO_AUTORIA(codlivro, matricula) VALUES(1,111);
INSERT INTO LIVRO_AUTORIA(codlivro, matricula) VALUES(1,112);
INSERT INTO LIVRO_AUTORIA(codlivro, matricula) VALUES(1,113);
INSERT INTO LIVRO_AUTORIA(codlivro, matricula) VALUES(2,114);
INSERT INTO LIVRO_AUTORIA(codlivro, matricula) VALUES(3,114);
INSERT INTO LIVRO_AUTORIA(codlivro, matricula) VALUES(3,115);
INSERT INTO LIVRO_AUTORIA(codlivro, matricula) VALUES(4,111);
INSERT INTO LIVRO_AUTORIA(codlivro, matricula) VALUES(4,116);
INSERT INTO LIVRO_AUTORIA(codlivro, matricula) VALUES(5,117);
INSERT INTO LIVRO_AUTORIA(codlivro, matricula) VALUES(5,118);



--TABELA CARTÃO

INSERT INTO CARTAO(codcartao, tipocartao) VALUES(1, 'SPECIAL');
INSERT INTO CARTAO(codcartao, tipocartao) VALUES(2, 'PREMIUM');
INSERT INTO CARTAO(codcartao, tipocartao) VALUES(3, 'GOLD');
INSERT INTO CARTAO(codcartao, tipocartao) VALUES(4, 'GOLD PLUS');





--TABELA CLIENTE


INSERT INTO CLIENTE(cpf, datanasc, nome, nacionalidade,codcartao) VALUES(920003, TO_DATE('11/12/1981','DD/MM/YYYY'), 'Ana Escobar', 'Colombiana',1);          
INSERT INTO CLIENTE(cpf, datanasc, nome, nacionalidade,codcartao) VALUES(890006, TO_DATE('13/08/1979','DD/MM/YYYY'), 'Carla Silva', 'Brasileira',1);        
INSERT INTO CLIENTE(cpf, datanasc, nome, nacionalidade,codcartao) VALUES(890106, TO_DATE('15/08/1979','DD/MM/YYYY'), 'João Inácio Magalhães', 'Brasileira',2);    
INSERT INTO CLIENTE(cpf, datanasc, nome, nacionalidade,codcartao) VALUES(890206, TO_DATE('29/10/1977','DD/MM/YYYY'), 'César Gonçalves', 'Brasileira',2);          
INSERT INTO CLIENTE(cpf, datanasc, nome, nacionalidade,codcartao) VALUES(890306, TO_DATE('30/03/1976','DD/MM/YYYY'), 'Flávio Aguiar Fonseca', 'Brasileira',2);        
INSERT INTO CLIENTE(cpf, datanasc, nome, nacionalidade,codcartao) VALUES(890406, TO_DATE('02/07/1966','DD/MM/YYYY'), 'Henrique Meirelles', 'Brasileira',2);    
INSERT INTO CLIENTE(cpf, datanasc, nome, nacionalidade,codcartao) VALUES(890506, TO_DATE('01/09/1969','DD/MM/YYYY'), 'Cleide Castanheira', 'Brasileira',2);
INSERT INTO CLIENTE(cpf, datanasc, nome, nacionalidade,codcartao) VALUES(890606, TO_DATE('15/10/1982','DD/MM/YYYY'), 'Júlio Siqueira', 'Brasileira',2);
INSERT INTO CLIENTE(cpf, datanasc, nome, nacionalidade,codcartao) VALUES(890706, TO_DATE('02/09/1951','DD/MM/YYYY'), 'Elza Saldanha Prado', 'Brasileira',2);
INSERT INTO CLIENTE(cpf, datanasc, nome, nacionalidade,codcartao) VALUES(890806, TO_DATE('08/08/1971','DD/MM/YYYY'), 'Marco Antônio Rossi', 'Brasileira',2);




--TABELA LOJA

INSERT INTO LOJA(cnpj, nome) VALUES(99991, 'Tabajara 1');
INSERT INTO LOJA(cnpj, nome) VALUES(99992, 'Tabajara 2');


--TABELA VENDA

INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(1,1,31.20,TO_DATE('12/06/2008','DD/MM/YYYY'),99991,1,890406);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(1,1,48.00,TO_DATE('12/06/2008','DD/MM/YYYY'),99991,4,890406);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(2,3,126.00,TO_DATE('13/06/2008','DD/MM/YYYY'),99991,5,890406);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(3,2,334.50,TO_DATE('14/06/2009','DD/MM/YYYY'),99991,3,890506);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(3,1,42.00,TO_DATE('14/06/2009','DD/MM/YYYY'),99991,5,890506);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(4,1,31.20,TO_DATE('12/06/2008','DD/MM/YYYY'),99991,1,890306);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(4,1,42.00,TO_DATE('12/06/2008','DD/MM/YYYY'),99991,5,890306);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(4,1,111.50,TO_DATE('12/06/2008','DD/MM/YYYY'),99991,3,890306);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(5,2,62.40,TO_DATE('15/06/2009','DD/MM/YYYY'),99991,1,890506);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(5,1,48.00,TO_DATE('15/06/2009','DD/MM/YYYY'),99991,4,890506);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(6,3,334.50,TO_DATE('16/06/2009','DD/MM/YYYY'),99991,3,890206);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(7,1,111.50,TO_DATE('12/06/2008','DD/MM/YYYY'),99991,3,920003);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(7,1,48.00,TO_DATE('12/06/2008','DD/MM/YYYY'),99991,4,920003);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(7,1,42.00,TO_DATE('12/06/2008','DD/MM/YYYY'),99991,5,920003);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(8,2,84.00,TO_DATE('13/06/2008','DD/MM/YYYY'),99991,5,890206);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(9,1,31.20,TO_DATE('13/06/2008','DD/MM/YYYY'),99991,1,890206);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(9,1,48.00,TO_DATE('13/06/2008','DD/MM/YYYY'),99991,4,890206);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(10,5,156.00,TO_DATE('15/06/2009','DD/MM/YYYY'),99991,1,890606);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(11,2,96.00,TO_DATE('16/06/2009','DD/MM/YYYY'),99991,4,890606);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(11,2,84.00,TO_DATE('16/06/2009','DD/MM/YYYY'),99991,5,890606);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(12,1,42.00,TO_DATE('14/06/2009','DD/MM/YYYY'),99991,4,890706);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(13,1,30.00,TO_DATE('12/06/2008','DD/MM/YYYY'),99992,2,890606);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(13,1,111.50,TO_DATE('12/06/2008','DD/MM/YYYY'),99992,3,890606);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(14,1,31.20,TO_DATE('12/06/2008','DD/MM/YYYY'),99992,1,890806);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(15,8,'',TO_DATE('12/06/2008','DD/MM/YYYY'),99992,5,890106);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(15,5,150.00,TO_DATE('12/06/2008','DD/MM/YYYY'),99992,2,890106);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(15,4,446.00,TO_DATE('12/06/2008','DD/MM/YYYY'),99992,3,890106);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(16,1,31.20,TO_DATE('13/06/2008','DD/MM/YYYY'),99992,1,890106);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(17,1,31.20,TO_DATE('13/06/2008','DD/MM/YYYY'),99992,1,890006);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(17,1,30.00,TO_DATE('13/06/2008','DD/MM/YYYY'),99992,2,890006);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(17,1,111.50,TO_DATE('13/06/2008','DD/MM/YYYY'),99992,3,890006);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(17,1,'',TO_DATE('13/06/2008','DD/MM/YYYY'),99992,5,890006);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(18,1,30.00,TO_DATE('14/06/2009','DD/MM/YYYY'),99992,2,890506);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(19,2,60.00,TO_DATE('14/06/2009','DD/MM/YYYY'),99992,2,890806);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(19,2,84.00,TO_DATE('14/06/2009','DD/MM/YYYY'),99992,4,890806);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(20,1,111.50,TO_DATE('15/06/2009','DD/MM/YYYY'),99992,3,890706);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(21,1,30.00,TO_DATE('16/06/2009','DD/MM/YYYY'),99992,2,890706);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(21,1,'',TO_DATE('16/06/2009','DD/MM/YYYY'),99992,5,890706);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(22,2,62.40,TO_DATE('15/06/2009','DD/MM/YYYY'),99992,1,890706);
INSERT INTO VENDA(idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) VALUES(23,1,30.00,TO_DATE('16/06/2009','DD/MM/YYYY'),99992,2,890206);


--TABELA EDITORAAUX


INSERT INTO EDITORAAUX(codeditora, nome) VALUES(6, 'EDITORA MACEDO');
INSERT INTO EDITORAAUX(codeditora, nome) VALUES(7, 'EDITORA SILVA');
INSERT INTO EDITORAAUX(codeditora, nome) VALUES(8, 'GLOBO');
INSERT INTO EDITORAAUX(codeditora, nome) VALUES(9, 'EDIPUCRS');

COMMIT;
```
---

# Exercício 1

-- Procedure
-- Como é usada: O BD terá a procedure esperando os parâmetros, e o softwares farão a chamada das procedures ler os dados do banco. 

```
Create or Replace Procedure P_TituloLivro
(p_cpf in Autor.Cpf%Type)
IS
Cursor c_livro IS
select titulo
            from Livro L
            inner join Livro_Autoria LA ON L.codlivro = LA.codlivro
            inner join Autor A ON LA.matricula = A.matricula
            where A.CPF = p_cpf;
Begin
For r_livro IN c_livro Loop
dbms_output.put_line('Titulo: '|| r_livro.titulo);
    End Loop;
End; 
```

```
Begin
    P_TituloLivro(890001);
End;
```

---

# Exercício 2

-- Function

```
CREATE OR REPLACE FUNCTION F_nomeEditora
(p_codEditora IN Editora.codEditora%Type)
RETURN VARCHAR2
IS
   v_Nome  Editora.Nome%Type;
BEGIN
    Select Nome INTO v_Nome
    FROM Editora
    where codEditora = p_codEditora;
    RETURN v_Nome;
  EXCEPTION
     WHEN No_Data_Found Then
       v_Nome := 'Editora não cadastrada!';
       RETURN v_Nome;
END;
```

```
---- Testando a função no Select (tabela default de testes) ----
select F_NomeEditora(1)  from Dual;
select F_nomeEditora(10) from Dual;
select l.*, F_NomeEditora(l.codEditora) nomeEditora from Livro l;
```

```
--- Testando a função no Bloco Pl/Sql
Declare
    v_nomeEditora Editora.Nome%Type;
Begin
   v_nomeEditora := F_NomeEditora(1);
   dbms_output.put_line('Editora: ' || v_nomeEditora);

   select F_NomeEditora(10) into v_nomeEditora from Dual;
   dbms_output.put_line('Editora: ' || v_nomeEditora);
End;
```

---

# Exercício 3

```
Create Or Replace Trigger tg_InserirNaAuditoria
After Insert
On Livro
For Each Row
Declare
    v_codlivro Livro.codlivro%type;
	v_preco Livro.preco%type;
Begin
    v_codlivro := :NEW.codlivro;
	v_preco := :NEW.preco;
    Insert into Auditoria values (v_codlivro, null, v_preco, sysdate);
End;
```

```
--insert into livro (codlivro, preco, numpags, titulo, datapublicacao, codeditora, sigla) VALUES (99, 77.77, 200, 'OpenPages Tutorial', TO_DATE('14/03/1997','DD/MM/YYYY'), 1, 'B');
```

```
--select * from auditoria;
```

---

# Exercício 4

(falta um numerador automático para o idvenda)

```
Create Or Replace Procedure RegistrarVenda
(	p_cnpj_loja IN Number,
    p_cpf_cliente IN Number,
    p_codlivro in Number,
    p_quantidade in Number)
IS
	v_preco Livro.preco%Type;
	v_data date;
Begin
	Select preco Into v_preco From Livro Where codlivro = p_codlivro;
	v_data := SYSDATE;
	Insert Into venda (idvenda, quantidade, total, datavenda, cnpj, codlivro, cpf) Values (998, p_quantidade, v_preco*p_quantidade, v_data, p_cnpj_loja, p_codlivro, p_cpf_cliente);
End;
```

```
Begin
	RegistrarVenda(99991,920003,1,10);
End;
```

```
select * from venda;
```
