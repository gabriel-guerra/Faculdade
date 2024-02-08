Arquivo da prova prática
[prova prática BD2.pdf](https://github.com/gabriel-guerra/Banco-Dados-2/files/12664174/prova.pratica.BD2.pdf)
[base-jogadores.txt](https://github.com/gabriel-guerra/Banco-Dados-2/files/12675596/base-jogadores.txt)

---

# Prova Prática Entrega até 24/09/2023 – 23:59
Base de dados: base_ProvaPratica.sql (os dados são somente para ter informações 
do que as tabelas possuem, não é necessário executar o arquivo).

1) Trigger e Cursor:
Crie um trigger que, após a inserção de um novo registro na tabela 
"ATLETAS", calcule a média das pontuações (coluna "PONTOS" na 
tabela SCOUT) de todos os jogadores do mesmo clube (tabela 
"CLUBES") e insira essa média em uma tabela de resumo, juntamente 
com o nome do clube. Use um cursor para percorrer todos os jogadores 
do mesmo clube

2) Procedure: 
Crie uma procedure para ao passar o código do clube ele devolva quantas 
partidas o clube ganhou, quantas perdeu, número de gols contra e gols pró, além 
da quantidade de pontos que ganhou? 

3) Function
Crie uma função que ao informar um clube, apresente a quantidade de pontos que 
esse clube conquistou, usando a seguinte tabela: 
5 pontos caso tenha vencido fora de casa
4 pontos caso tenha vencido em casa
3 pontos caso tenha empatado fora de casa
1 ponto caso tenha empatado em casa.
Usar tabela partidas para isso.

4) Exception
Crie uma exceção personalizada chamada 
"RegistroNaoEncontradoException". Modifique a função do Exercício 2 
para lidar com essa exceção e retornar uma mensagem amigável quando 
não encontrar um registro válido para o clube na partida especificada. 

5) Exercício Livre
Você deverá elaborar um exercício e apresentar a sua resolução. O exercício 
deverá constar uma procedure ou function que trabalhe com as tabelas Clubes, 
Atletas, Posição.


J - Jogos
SCOUTS POSITIVOS
RB - Roubada de bolas (+ 1,7)
G - Gol (+8,0)
A - Assistência (+5,0)
SG - Jogos sem sofrer gols (+5,0)
FS - Falta sofrida ( +0,5)
FF - Finalização para fora (+0,7)
FD - Finalização defendida (+1,0)
FT - Finalização na trave (+3,5)
DD - Defesa difícil (+3,0)
DP - Defesa de pênalti (+7,0)
SCOUTS NEGATIVOS
GC - Gol contra (-6,0)
CV - Cartão vermelho (-5,0)
CA - Cartão amarelo (-2,0)
GS - Gol sofrido (-5,0)
PP - Pênalti perdido (-3,5)
FC - Falta cometida (-0,5)
I - Impedimento (-0,5)
PE - Passe Errado (-0,3)



----

```
CREATE TABLE ATLETAS 
   (	"ID" NUMBER(6), 
	"APELIDO" VARCHAR2(40), 
	"CLUBEID" NUMBER(6), 
	"POSICAOID" NUMBER(6)
   ) ;
--------------------------------------------------------
--  DDL for Table CLUBES
--------------------------------------------------------

  CREATE TABLE CLUBES 
   (	"ID" NUMBER(6), 
	"NOME" VARCHAR2(30), 
	"ABREVIACAO" VARCHAR2(3), 
	"SLUG" VARCHAR2(30)
   ) ;
--------------------------------------------------------
--  DDL for Table PARTIDAS
--------------------------------------------------------

  CREATE TABLE PARTIDAS
   (	"ID" NUMBER(8), 
	"RODADA" NUMBER(4), 
	"CASAID" NUMBER(6), 
	"VISITANTEID" NUMBER(6), 
	"PLACARCASA" NUMBER(3,0), 
	"PLACARVISITANTE" NUMBER(3,0), 
	"RESULTADO" VARCHAR2(30)
   );
--------------------------------------------------------
--  DDL for Table POSICOES
--------------------------------------------------------

  CREATE TABLE POSICOES 
   (	"ID" NUMBER(6), 
	"NOME" VARCHAR2(30), 
	"ABREVIACAO" VARCHAR2(3)
   );
--------------------------------------------------------
--  DDL for Table SCOUT
--------------------------------------------------------

  CREATE TABLE SCOUT 
   (	"RODADA" NUMBER(12), 
	"CLUBEID" NUMBER(6), 
	"ATLETAID" NUMBER(6), 
	"PARTICIPOU" VARCHAR2(15), 
	"PONTOS" NUMBER(9,2), 
	"PONTOSMEDIA" NUMBER(9,2), 
	"PRECO" NUMBER(9,2), 
	"PRECOVARIACAO" NUMBER(9,2), 
	"FS" NUMBER(3,0), 
	"PE" NUMBER(3,0), 
	"A" NUMBER(3,0), 
	"FT" NUMBER(3,0), 
	"FD" NUMBER(3,0), 
	"FF" NUMBER(3,0), 
	"G" NUMBER(3,0), 
	"I" NUMBER(3,0), 
	"PP" NUMBER(3,0), 
	"RB" NUMBER(3,0), 
	"FC" NUMBER(3,0), 
	"GC" NUMBER(3,0), 
	"CA" NUMBER(3,0), 
	"CV" NUMBER(3,0), 
	"SG" NUMBER(3,0), 
	"DD" NUMBER(3,0), 
	"DP" NUMBER(3,0), 
	"GS" NUMBER(3,0)
   ) ;
--------------------------------------------------------
--  DDL for Table STATUS
--------------------------------------------------------

  CREATE TABLE STATUS
   ("ID" NUMBER(6), 
	"NOME" VARCHAR2(30)
   );


--------------------------------------------------------
--  DDL for Table RESUMO
--------------------------------------------------------

create table RESUMO(
    "NOMECLUBE" VARCHAR2(30),
    "MEDIAPONTOS" NUMBER(9,2)
);

--------------------------------------------------------

Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('37623','Rafael Marques','294','3');
Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('72382','Marquinhos','277','5');
Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('95830','Emerson Cris','315','6');
Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('81794','Cláudio Prates','327','6');
Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('37837','Cristian','303','4');
Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('38062','Lugano','276','3');
Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('38109','Jefferson','263','1');
Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('38139','Bobô','284','5');
Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('38162','Fred','282','5');
Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('38061','Edcarlos','282','3');

Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('262','Flamengo','FLA','Flamengo');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('263','Botafogo','BOT','Botafogo');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('264','Corinthians','COR','Corinthians');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('266','Fluminense','FLU','Fluminense');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('275','Palmeiras','PAL','Palmeiras');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('276','São Paulo','SAO','Sao-Paulo');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('277','Santos','SAN','Santos');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('282','Atlético-MG','CAM','Atletico-MG');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('283','Cruzeiro','CRU','Cruzeiro');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('284','Grêmio','GRE','Gremio');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('285','Internacional','INT','Internacional');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('287','Vitória','VIT','Vitoria');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('292','Sport','SPT','Sport');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('293','Atlético-PR','CAP','Atletico-PR');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('294','Coritiba','CFC','Coritiba');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('303','Ponte Preta','PON','Ponte-Preta');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('315','Chapecoense','CHA','Chapecoense');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('316','Figueirense','FIG','Figueirense');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('327','América-MG','AME','America-MG');
Insert into CLUBES (ID,NOME,ABREVIACAO,SLUG) values ('344','Santa Cruz','SCZ','Santa-Cruz');


Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201233','1','327','266','0','1','Visitante');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201235','1','344','287','4','1','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201239','2','277','294','2','1','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201242','2','293','282','1','1','Empate');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201240','2','283','316','2','2','Empate');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201237','2','266','344','2','2','Empate');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201243','2','315','327','3','1','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201238','2','276','285','1','2','Visitante');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201234','1','282','277','1','0','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201244','2','303','275','2','1','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201241','2','284','262','1','0','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201236','2','287','264','3','2','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201245','2','292','263','1','1','Empate');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201246','3','263','293','2','1','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201247','3','262','315','2','2','Empate');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201250','3','282','284','0','3','Visitante');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201254','3','327','287','1','1','Empate');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201248','3','264','303','3','0','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201255','3','344','283','4','1','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201249','3','275','266','2','0','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201251','3','285','292','1','0','Casa');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201252','3','294','276','1','1','Empate');
Insert into PARTIDAS (ID,RODADA,CASAID,VISITANTEID,PLACARCASA,PLACARVISITANTE,RESULTADO) values ('201257','4','266','263','1','0','Casa');


Insert into POSICOES (ID,NOME,ABREVIACAO) values ('1','Goleiro','GOL');
Insert into POSICOES (ID,NOME,ABREVIACAO) values ('2','Lateral','LAT');
Insert into POSICOES (ID,NOME,ABREVIACAO) values ('3','Zagueiro','ZAG');
Insert into POSICOES (ID,NOME,ABREVIACAO) values ('4','Meia','MEI');
Insert into POSICOES (ID,NOME,ABREVIACAO) values ('5','Atacante','ATA');
Insert into POSICOES (ID,NOME,ABREVIACAO) values ('6','Técnico','TEC');

Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('0','294','37623','FALSE','0','0','4','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('1','294','37623','TRUE','53','53','684','284','0','3','0','0','0','0','0','0','0','1','1','0','0','0','1','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('2','294','37623','TRUE','-5','24','667','-17','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('3','294','37623','TRUE','23','237','698','31','1','2','0','0','0','0','0','0','0','2','2','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('4','294','37623','TRUE','-27','11','55','-148','0','3','0','0','0','0','0','0','0','1','3','0','1','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('5','294','37623','TRUE','82','252','784','234','2','4','0','0','0','0','1','0','0','2','2','0','1','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('6','294','37623','TRUE','3','215','655','-129','1','2','0','0','0','0','0','0','0','2','2','0','1','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('7','294','37623','FALSE','0','215','655','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('8','294','37623','TRUE','11','2','65','-5','0','2','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('9','294','37623','TRUE','44','23','72','7','2','4','0','0','0','0','0','0','0','3','1','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('10','294','37623','FALSE','0','23','72','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('11','294','37623','FALSE','0','23','72','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('12','294','37623','FALSE','0','23','72','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('0','277','72382','FALSE','0','0','2','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('1','277','72382','FALSE','0','0','2','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('2','277','72382','FALSE','0','0','2','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('3','277','72382','FALSE','0','0','2','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('4','277','72382','FALSE','0','0','2','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('10','315','95830','FALSE','0','0','944','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('5','327','81794','FALSE','0','0','519','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('0','303','37837','FALSE','0','0','6','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('1','303','37837','FALSE','0','0','6','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('2','303','37837','TRUE','25','25','578','-22','0','0','0','1','0','0','0','0','0','0','2','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('3','303','37837','TRUE','-1','12','499','-79','1','1','0','0','0','0','0','0','0','1','0','0','1','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('4','303','37837','TRUE','1','113','497','-2','1','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('5','303','37837','TRUE','13','117','498','1','0','2','0','0','0','1','0','0','0','1','1','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('6','303','37837','TRUE','22','138','514','16','1','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('7','303','37837','TRUE','-48','35','359','-155','2','6','0','0','0','0','0','0','0','0','4','0','1','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('8','303','37837','TRUE','5','37','424','65','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('9','303','37837','TRUE','3','36','413','-11','1','3','0','0','0','1','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('10','303','37837','TRUE','2','34','405','-8','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('11','303','37837','FALSE','0','34','405','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('12','303','37837','FALSE','0','34','405','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('13','303','37837','FALSE','0','34','405','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('14','303','37837','FALSE','0','34','405','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('15','303','37837','FALSE','0','34','405','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('16','303','37837','FALSE','0','34','405','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('17','303','37837','FALSE','0','34','405','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('18','303','37837','FALSE','0','34','405','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('19','303','37837','FALSE','0','34','405','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('0','276','38062','FALSE','0','0','10','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('1','276','38062','TRUE','5','5','1103','103','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('2','276','38062','TRUE','81','655','1378','275','1','1','0','0','0','1','1','0','0','1','1','0','1','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('3','276','38062','FALSE','0','655','1378','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('4','276','38062','TRUE','59','633','137','-8','0','0','0','0','0','0','0','0','0','2','1','0','1','0','1','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('5','276','38062','TRUE','-14','44','1205','-165','1','3','0','0','0','0','0','0','0','0','2','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('6','276','38062','TRUE','5','452','1294','89','0','4','0','0','0','0','0','0','0','1','1','0','0','0','1','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('7','276','38062','TRUE','13','398','1242','-52','1','3','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('8','276','38062','TRUE','105','491','1433','191','0','4','0','0','0','0','1','2','0','1','0','0','1','0','1','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('9','276','38062','FALSE','0','491','1433','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('10','276','38062','FALSE','0','491','1433','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('11','276','38062','TRUE','-64','35','1105','-328','0','2','0','0','0','1','0','0','0','0','3','0','0','1','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('12','276','38062','FALSE','0','35','1105','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('13','276','38062','TRUE','-8','302','1134','29','0','5','0','0','0','0','0','1','0','1','1','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('14','276','38062','FALSE','0','302','1134','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('15','276','38062','FALSE','0','302','1134','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('16','276','38062','TRUE','-2','252','1073','-61','0','4','0','0','0','0','0','0','0','1','1','0','1','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('17','276','38062','TRUE','8','236','1117','44','2','3','0','0','0','1','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('18','276','38062','TRUE','-3','191','1017','-1','0','4','0','0','0','1','0','0','0','0','1','0','1','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('19','276','38062','FALSE','0','191','1017','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('20','276','38062','FALSE','0','191','1017','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('21','276','38062','FALSE','0','191','1017','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('22','276','38062','FALSE','0','191','1017','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('23','276','38062','FALSE','0','191','1017','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('24','276','38062','FALSE','0','191','1017','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('25','276','38062','FALSE','0','191','1017','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('26','276','38062','FALSE','0','191','1017','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('6','294','71040','FALSE','0','0','5','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('7','294','71040','TRUE','0','0','391','-109','1','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('8','294','71040','TRUE','21','105','428','37','2','2','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('9','294','71040','TRUE','2','77','393','-35','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('10','294','71040','TRUE','26','123','439','46','2','5','0','0','0','2','0','0','0','1','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('10','294','74210','FALSE','0','123','233','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('11','294','74210','FALSE','0','123','233','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('12','294','74210','FALSE','0','123','233','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('13','294','74210','FALSE','0','123','233','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('14','294','74210','FALSE','0','123','233','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('15','294','74210','FALSE','0','123','233','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
Insert into SCOUT (RODADA,CLUBEID,ATLETAID,PARTICIPOU,PONTOS,PONTOSMEDIA,PRECO,PRECOVARIACAO,FS,PE,A,FT,FD,FF,G,I,PP,RB,FC,GC,CA,CV,SG,DD,DP,GS) values ('16','294','74210','FALSE','0','123','233','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
```

---

# 1. Trigger e Cursor:
Crie um trigger que, após a inserção de um novo registro na tabela
"ATLETAS", calcule a média das pontuações (coluna "PONTOS" na
tabela SCOUT) de todos os jogadores do mesmo clube (tabela
"CLUBES") e insira essa média em uma tabela de resumo, juntamente
com o nome do clube. Use um cursor para percorrer todos os jogadores
do mesmo clube

Resposta 

```
Create or Replace Trigger tg_media_jogadores_clube
    After insert on atletas
    for each row
Declare
    cursor c_busca_jogador (p_clubeid in number) IS 
		select distinct atletaid from scout where clubeid = p_clubeid;
	v_mediaJogador number;
	v_mediaTotal number := 0;
	v_iterador number := 0;
	v_nomeclube clubes.nome%type;
Begin

	select nome into v_nomeclube from clubes where id = :new.clubeid;
    
    For r_jogador in c_busca_jogador(:new.clubeid) Loop 
		select avg(pontos) into v_mediajogador from scout where atletaid = r_jogador.atletaid;
        v_mediaTotal := v_mediaTotal + v_mediajogador;
		v_iterador := v_iterador + 1;
    End Loop;

	IF v_iterador > 0 THEN
		Insert into Resumo (nomeclube, mediapontos) values (v_nomeclube, (v_mediaTotal/v_iterador));
	end if;

End;
```

--- 

Teste 

```
Insert into ATLETAS (ID,APELIDO,CLUBEID,POSICAOID) values ('12345','Gabriel Guerra','303','3');

select * from resumo;
```

----

# 2.Procedure:
Crie uma procedure para ao passar o código do clube ele devolva quantas
partidas o clube ganhou, quantas perdeu, número de gols contra e gols pró, além
da quantidade de pontos que ganhou?

---

Resposta 

```
Create or Replace Procedure EstatisticasClube 
	(p_clubeId IN clubes.id%type,
    p_ganhou OUT Number, 
    p_perdeu OUT Number, 
    p_gols_contra OUT Number, 
    p_gols_pro OUT Number, 
    p_pontos OUT Number) IS 

Begin 

    select count(id) into p_ganhou from partidas where (casaid = p_clubeId and resultado = 'Casa') or (visitanteid = p_clubeId and resultado = 'Visitante');
    select count(id) into p_perdeu from partidas where (casaid = p_clubeId and resultado = 'Visitante') or (visitanteid = p_clubeId and resultado = 'Casa');
    
    select (select sum(placarvisitante) from partidas where casaid = p_clubeId) + (select sum(placarcasa) from partidas where visitanteid = p_clubeId) into p_gols_contra from dual;
    select (select sum(placarcasa) from partidas where casaid = p_clubeId) + (select sum(placarvisitante) from partidas where visitanteid = p_clubeId) into p_gols_pro from dual;

	p_pontos := f_pontosClube(p_clubeId);
    
End;
```

---

Teste

```
Declare 
    v_idClube Number := 287; 
    v_ganhou Number; 
    v_perdeu Number; 
    v_golscontra Number; 
    v_golspro Number;
	v_pontos Number;

Begin 
	EstatisticasClube(v_idClube, v_ganhou, v_perdeu, v_golscontra, v_golspro, v_pontos);
	dbms_output.put_line('Clube ID: ' || v_idClube);
	dbms_output.put_line('Vitórias: ' || v_ganhou);
	dbms_output.put_line('Derrotas: ' || v_perdeu);
	dbms_output.put_line('Gols Contra: ' || v_golscontra);
	dbms_output.put_line('Gols Pró: ' || v_golspro);
	dbms_output.put_line('Pontos: ' || v_pontos);
End;
```


---


# 3. Function
Crie uma função que ao informar um clube, apresente a quantidade de pontos que
esse clube conquistou, usando a seguinte tabela:
5 pontos caso tenha vencido fora de casa
4 pontos caso tenha vencido em casa
3 pontos caso tenha empatado fora de casa
1 ponto caso tenha empatado em casa.
Usar tabela partidas para isso.

--- 
Resposta 

```
Create Or Replace Function f_pontosClube (p_clubeId in clubes.id%type)
	Return Number Is -- Declaração de variáveis se necessário
		v_vitFora Number;
		v_vitCasa Number;
		v_empFora Number; 
		v_empCasa Number;
		v_totalPontos Number;

Begin 

select count(id) into v_vitFora from partidas where visitanteId = p_clubeId and resultado = 'Visitante';
select count(id) into v_vitCasa from partidas where casaId = p_clubeId and resultado = 'Casa';
select count(id) into v_empFora from partidas where visitanteId = p_clubeId and resultado = 'Empate';
select count(id) into v_empCasa from partidas where casaId = p_clubeId and resultado = 'Empate';

    v_totalPontos := (v_vitFora * 5) + (v_vitCasa * 4 ) + (v_empFora * 3) + (v_empCasa * 1);

return v_totalPontos;
    
End;
```
--- 

Teste 

```
Declare
   v_pontos number;
Begin
    v_pontos := f_pontosClube(266);
	dbms_output.put_line('Pontos ganhos: ' || v_pontos);
End;
```

---

# 4. Exception
Crie uma exceção personalizada chamada
"RegistroNaoEncontradoException". Modifique a função do Exercício 2
para lidar com essa exceção e retornar uma mensagem amigável quando
não encontrar um registro válido para o clube na partida especificada.

--- 

Resposta 

```
Create or Replace Procedure EstatisticasClube 
	(p_clubeId IN clubes.id%type,
    p_ganhou OUT Number, 
    p_perdeu OUT Number, 
    p_gols_contra OUT Number, 
    p_gols_pro OUT Number, 
    p_pontos OUT Number) IS 

    v_consultaClube clubes.id%type;
	RegistroNaoEncontradoException Exception;

Begin

    select count(nome) into v_consultaClube from clubes where id = p_clubeId;

	if (v_consultaClube = 0) then
		Raise RegistroNaoEncontradoException;
	End If;

    select count(id) into p_ganhou from partidas where (casaid = p_clubeId and resultado = 'Casa') or (visitanteid = p_clubeId and resultado = 'Visitante');
    select count(id) into p_perdeu from partidas where (casaid = p_clubeId and resultado = 'Visitante') or (visitanteid = p_clubeId and resultado = 'Casa');
    
    select (select sum(placarvisitante) from partidas where casaid = p_clubeId) + (select sum(placarcasa) from partidas where visitanteid = p_clubeId) into p_gols_contra from dual;
    select (select sum(placarcasa) from partidas where casaid = p_clubeId) + (select sum(placarvisitante) from partidas where visitanteid = p_clubeId) into p_gols_pro from dual;

	p_pontos := f_pontosClube(p_clubeId);

Exception
    when RegistroNaoEncontradoException then
    	dbms_output.put_line('Clube não encontrado');
    
End;
```

--- 

Teste 

```
Declare 
    v_idClube Number := 001; 
    v_ganhou Number; 
    v_perdeu Number; 
    v_golscontra Number; 
    v_golspro Number;
	v_pontos Number;

Begin 
	EstatisticasClube(v_idClube, v_ganhou, v_perdeu, v_golscontra, v_golspro, v_pontos);
End;
```

---

# 5. Exercício Livre
Você deverá elaborar um exercício e apresentar a sua resolução. O exercício
deverá constar uma procedure ou function que trabalhe com as tabelas Clubes,
Atletas, Posição.

Crie uma função que ao receber o id de um atleta, traga um resumo com informações deste jogador: Apelido, nome do clube, posição, numero de partidas jogadas, média de pontos. 


--- 

Resposta 

```
Create or Replace Procedure dadosJogador 
    (p_atletaid in atletas.id%type,
    p_nome out atletas.apelido%type,
    p_time out clubes.nome%type,
    p_posicao out posicoes.nome%type,
    p_partidas out number,
    p_mediaPontos out number
    ) IS
Begin
    select atletas.apelido "Nome do Atleta", clubes.nome "Time", posicoes.nome "Posição",
    AVG(pontos) "Média de pontos"
    	Into p_nome, p_time, p_posicao, p_mediaPontos
        from atletas
    	inner join clubes ON atletas.clubeid = clubes.id
    	inner join posicoes ON atletas.posicaoid = posicoes.id
        inner join scout on atletas.id = scout.atletaid
    where atletas.id = p_atletaid group by atletas.apelido, clubes.nome, posicoes.nome;

	select count(participou) into p_partidas from scout where atletaid = p_atletaid and participou in 'TRUE';

Exception
    when NO_DATA_FOUND Then
    	dbms_output.put_line('Jogador não encontrado');
End;
```

--- 

Teste 

```
Declare 
    v_idAtleta Number := 37623; 
    v_nome atletas.apelido%type;
	v_time clubes.nome%type; 
    v_posicao posicoes.nome%type; 
    v_partidas Number; 
    v_mediaPontos Number;

Begin 
	dadosJogador(v_idAtleta, v_nome, v_time, v_posicao, v_partidas, v_mediaPontos);
	dbms_output.put_line('Jogador: ' || v_nome);
	dbms_output.put_line('Time: ' || v_time);
	dbms_output.put_line('Posição: ' || v_posicao);
	dbms_output.put_line('Partidas Disputadas: ' || v_partidas);
	dbms_output.put_line('Média Pontos: ' || v_mediaPontos);
End;
```