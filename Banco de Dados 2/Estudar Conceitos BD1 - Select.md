# Essencial

Em PL/SQL (Procedural Language/Structured Query Language), que é uma linguagem de programação usada principalmente com o Oracle Database, você pode realizar seleções (queries) de dados de várias maneiras. Os principais tipos de seleções que você pode fazer em PL/SQL são:

1. **SELECT Simples**:
   - É a consulta mais básica, usada para recuperar dados de uma única tabela.
   - Exemplo:
     ```plsql
     SELECT coluna1, coluna2 FROM tabela WHERE condição;
     ```

2. **SELECT com Junção (JOIN)**:
   - Usado para combinar dados de duas ou mais tabelas relacionadas.
   - Exemplo:
     ```plsql
     SELECT t1.coluna1, t2.coluna2
     FROM tabela1 t1
     JOIN tabela2 t2 ON t1.chave = t2.chave;
     ```

3. **SELECT com Funções de Agregação**:
   - Usado para calcular valores agregados, como soma, média, máximo, mínimo, etc.
   - Exemplo:
     ```plsql
     SELECT AVG(coluna) FROM tabela;
     ```

4. **SELECT com Subconsultas (Subqueries)**:
   - Permite incorporar uma consulta dentro de outra consulta.
   - Exemplo:
     ```plsql
     SELECT coluna1 FROM tabela WHERE coluna2 IN (SELECT coluna3 FROM outra_tabela);
     ```

5. **SELECT com Classificação (ORDER BY)**:
   - Usado para classificar os resultados em uma ordem específica.
   - Exemplo:
     ```plsql
     SELECT coluna1, coluna2 FROM tabela ORDER BY coluna1 ASC;
     ```

6. **SELECT com Funções de Texto e Data**:
   - Permite o uso de funções para manipular dados de texto e datas.
   - Exemplo:
     ```plsql
     SELECT TO_CHAR(data, 'DD-MM-YYYY') FROM tabela;
     ```

7. **SELECT com Grupos (GROUP BY)**:
   - Usado em conjunto com funções de agregação para agrupar resultados com base em valores comuns.
   - Exemplo:
     ```plsql
     SELECT coluna1, SUM(coluna2)
     FROM tabela
     GROUP BY coluna1;
     ```

8. **SELECT Distinto (DISTINCT)**:
   - Usado para retornar valores únicos e eliminar duplicatas.
   - Exemplo:
     ```plsql
     SELECT DISTINCT coluna FROM tabela;
     ```

9. **SELECT com Limitação (LIMIT ou ROWNUM)**:
   - Usado para limitar o número de registros retornados.
   - Exemplo:
     ```plsql
     SELECT coluna FROM tabela WHERE ROWNUM <= 10;
     ```

10. **SELECT em Tabelas Temporárias ou Views**:
    - Você pode executar consultas em tabelas temporárias ou views da mesma forma que em tabelas regulares.

11. **SELECT com Cláusula INTO**:
    - Usado em consultas que retornam um único valor, permitindo que você armazene o resultado em uma variável.
    - Exemplo:
      ```plsql
      SELECT coluna INTO variavel FROM tabela WHERE condição;
      ```

12. **SELECT com Cláusulas CASE e DECODE**:
    - Usado para realizar seleções condicionais, permitindo a transformação de valores com base em condições.
    - Exemplo com `CASE`:
      ```plsql
      SELECT nome,
             CASE
                 WHEN idade < 18 THEN 'Menor de Idade'
                 ELSE 'Maior de Idade'
             END AS faixa_etaria
      FROM tabela;
      ```
    - Exemplo com `DECODE`:
      ```plsql
      SELECT nome,
             DECODE(idade, 18, 'Dezoito Anos', 21, 'Vinte e Um Anos', 'Outra Idade') AS descricao
      FROM tabela;
      ```
- Estudar também o translate

15. **SELECT com Subconsultas Correlacionadas**:
    - Usado quando uma subconsulta faz referência a uma coluna da consulta externa.
    - Exemplo:
      ```plsql
      SELECT nome
      FROM funcionarios f
      WHERE salario > (SELECT AVG(salario) FROM funcionarios WHERE departamento = f.departamento);
      ```

---
# Se der tempo

13. **SELECT com Expressões de Tabela Comuns (Common Table Expressions - CTEs)**:
    - Usado para criar consultas mais complexas dividindo-as em partes comuns.
    - Exemplo:
      ```plsql
      WITH CTE AS (
          SELECT coluna1, coluna2 FROM tabela1
      )
      SELECT coluna1 FROM CTE WHERE coluna2 > 100;
      ```

14. **SELECT com Funções Analíticas (Window Functions)**:
    - Usado para realizar cálculos sobre um conjunto de registros relacionados em um resultado de consulta.
    - Exemplo:
      ```plsql
      SELECT nome, salario, AVG(salario) OVER (PARTITION BY departamento) AS media_salario_departamento
      FROM funcionarios;
      ```

16. **SELECT com Funções Agregadas de Janela (Window Aggregate Functions)**:
    - Usado em conjunto com funções analíticas para realizar cálculos em um conjunto de registros de janela.
    - Exemplo:
      ```plsql
      SELECT departamento, nome, salario, MAX(salario) OVER (PARTITION BY departamento) AS max_salario_departamento
      FROM funcionarios;
      ```

17. **SELECT em Tabelas Externas (External Tables)**:
    - Permite selecionar dados de fontes externas, como arquivos CSV, como se fossem tabelas no banco de dados.
    - Exemplo:
      ```plsql
      CREATE TABLE dados_externos (
          nome VARCHAR2(50),
          idade NUMBER
      )
      ORGANIZATION EXTERNAL (
          TYPE ORACLE_LOADER
          DEFAULT DIRECTORY dados_externos_dir
          ACCESS PARAMETERS (
              RECORDS DELIMITED BY NEWLINE
              FIELDS (nome CHAR(50), idade CHAR(10))
          )
          LOCATION ('dados.csv')
      );
      
      SELECT * FROM dados_externos;
      ```


---


-- Database

CREATE TABLE DEPT
       (DEPTNO NUMBER(2) CONSTRAINT PK_DEPT PRIMARY KEY,
DNAME VARCHAR2(14) ,
LOC VARCHAR2(13) ) ;

CREATE TABLE EMP
       (EMPNO NUMBER(4) CONSTRAINT PK_EMP PRIMARY KEY,
ENAME VARCHAR2(10),
JOB VARCHAR2(9),
MGR NUMBER(4),
HIREDATE DATE,
SAL NUMBER(7,2),
COMM NUMBER(7,2),
DEPTNO NUMBER(2) CONSTRAINT FK_DEPTNO REFERENCES DEPT);

CREATE TABLE BONUS
(
ENAME VARCHAR2(10) ,
JOB VARCHAR2(9)  ,
SAL NUMBER,
COMM NUMBER
) ;

CREATE TABLE SALGRADE
      ( GRADE NUMBER,
LOSAL NUMBER,
HISAL NUMBER );


INSERT INTO DEPT VALUES
(10,'ACCOUNTING','NEW YORK');
INSERT INTO DEPT VALUES (20,'RESEARCH','DALLAS');
INSERT INTO DEPT VALUES
(30,'SALES','CHICAGO');
INSERT INTO DEPT VALUES
(40,'OPERATIONS','BOSTON');
INSERT INTO EMP VALUES
(7369,'SMITH','CLERK',7902,to_date('17-12-1980','dd-mm-yyyy'),800,NULL,20);
INSERT INTO EMP VALUES
(7499,'ALLEN','SALESMAN',7698,to_date('20-2-1981','dd-mm-yyyy'),1600,300,30);
INSERT INTO EMP VALUES
(7521,'WARD','SALESMAN',7698,to_date('22-2-1981','dd-mm-yyyy'),1250,500,30);
INSERT INTO EMP VALUES
(7566,'JONES','MANAGER',7839,to_date('2-4-1981','dd-mm-yyyy'),2975,NULL,20);
INSERT INTO EMP VALUES
(7654,'MARTIN','SALESMAN',7698,to_date('28-9-1981','dd-mm-yyyy'),1250,1400,30);
INSERT INTO EMP VALUES
(7698,'BLAKE','MANAGER',7839,to_date('1-5-1981','dd-mm-yyyy'),2850,NULL,30);
INSERT INTO EMP VALUES
(7782,'CLARK','MANAGER',7839,to_date('9-6-1981','dd-mm-yyyy'),2450,NULL,10);
INSERT INTO EMP VALUES
(7788,'SCOTT','ANALYST',7566,to_date('13-JUL-87')-85,3000,NULL,20);
INSERT INTO EMP VALUES
(7839,'KING','PRESIDENT',NULL,to_date('17-11-1981','dd-mm-yyyy'),5000,NULL,10);
INSERT INTO EMP VALUES
(7844,'TURNER','SALESMAN',7698,to_date('8-9-1981','dd-mm-yyyy'),1500,0,30);
INSERT INTO EMP VALUES
(7876,'ADAMS','CLERK',7788,to_date('13-JUL-87')-51,1100,NULL,20);
INSERT INTO EMP VALUES
(7900,'JAMES','CLERK',7698,to_date('3-12-1981','dd-mm-yyyy'),950,NULL,30);
INSERT INTO EMP VALUES
(7902,'FORD','ANALYST',7566,to_date('3-12-1981','dd-mm-yyyy'),3000,NULL,20);
INSERT INTO EMP VALUES
(7934,'MILLER','CLERK',7782,to_date('23-1-1982','dd-mm-yyyy'),1300,NULL,10);

CREATE TABLE BONUS
(
ENAME VARCHAR2(10) ,
JOB VARCHAR2(9)  ,
SAL NUMBER,
COMM NUMBER
) ;

CREATE TABLE SALGRADE
      ( GRADE NUMBER,
LOSAL NUMBER,
HISAL NUMBER );
INSERT INTO SALGRADE VALUES (1,700,1200);
INSERT INTO SALGRADE VALUES (2,1201,1400);
INSERT INTO SALGRADE VALUES (3,1401,2000);
INSERT INTO SALGRADE VALUES (4,2001,3000);
INSERT INTO SALGRADE VALUES (5,3001,9999);
COMMIT;

---

1. Select Simples: 

```
select ename from emp where job = 'MANAGER';
```

----

2. Select com Join:

# Tipos de join

1. **INNER JOIN**:
   - Retorna apenas as linhas que têm correspondências nas duas tabelas.
   - Sintaxe:
     ```sql
     SELECT tabela1.coluna, tabela2.coluna
     FROM tabela1
     INNER JOIN tabela2 ON tabela1.chave = tabela2.chave;
     ```

```
select dname, ename from dept inner join emp on dept.deptno = emp.deptno;
```



2. **LEFT (OUTER) JOIN**:
   - Retorna todas as linhas da tabela da esquerda (primeira tabela mencionada) e as linhas correspondentes da tabela da direita.
   - Se não houver correspondência na tabela da direita, as colunas da tabela da direita serão preenchidas com valores nulos.
   - Sintaxe:
     ```sql
     SELECT tabela1.coluna, tabela2.coluna
     FROM tabela1
     LEFT JOIN tabela2 ON tabela1.chave = tabela2.chave;
     ```

3. **RIGHT (OUTER) JOIN**:
   - Oposto ao LEFT JOIN, retorna todas as linhas da tabela da direita e as linhas correspondentes da tabela da esquerda.
   - Se não houver correspondência na tabela da esquerda, as colunas da tabela da esquerda serão preenchidas com valores nulos.
   - Sintaxe:
     ```sql
     SELECT tabela1.coluna, tabela2.coluna
     FROM tabela1
     RIGHT JOIN tabela2 ON tabela1.chave = tabela2.chave;
     ```

4. **FULL (OUTER) JOIN**:
   - Retorna todas as linhas quando houver uma correspondência em uma das tabelas.
   - Combina o resultado do LEFT JOIN e RIGHT JOIN.
   - Se não houver correspondência em uma tabela, as colunas da outra tabela serão preenchidas com valores nulos.
   - Sintaxe:
     ```sql
     SELECT tabela1.coluna, tabela2.coluna
     FROM tabela1
     FULL JOIN tabela2 ON tabela1.chave = tabela2.chave;
     ```

5. **SELF JOIN**:
   - Uma junção onde uma tabela é combinada com ela mesma.
   - Pode ser usado para consultar relacionamentos hierárquicos ou recursivos em uma tabela.
   - Sintaxe:
     ```sql
     SELECT emp1.nome, emp2.nome
     FROM funcionarios emp1
     INNER JOIN funcionarios emp2 ON emp1.supervisor_id = emp2.id;
     ```

6. **CROSS JOIN** (ou Produto Cartesiano):
   - Combina todas as linhas de uma tabela com todas as linhas da outra tabela, criando um conjunto de resultados semelhante a uma matriz.
   - Sintaxe:
     ```sql
     SELECT tabela1.coluna, tabela2.coluna
     FROM tabela1
     CROSS JOIN tabela2;
     ```

7. **SELF CROSS JOIN** (Produto Cartesiano com uma única tabela):
   - Realiza um produto cartesiano em uma única tabela.
   - Cria todas as combinações possíveis de linhas dentro da mesma tabela.
   - Sintaxe:
     ```sql
     SELECT t1.coluna, t2.coluna
     FROM tabela t1
     CROSS JOIN tabela t2;
     ```

8. **NATURAL JOIN**:
   - Realiza uma junção com base em colunas com nomes idênticos em ambas as tabelas, eliminando a necessidade de especificar explicitamente as colunas de junção.
   - Sintaxe:
     ```sql
     SELECT coluna1, coluna2
     FROM tabela1
     NATURAL JOIN tabela2;
     ```

Lembre-se de escolher o tipo de junção adequado com base nos requisitos da sua consulta e nas relações entre as tabelas. Cada tipo de junção tem um comportamento diferente e é útil para cenários específicos.


---

# Cursor 

```
Declare

Cursor c_salario is 
	select ename, sal from emp order by sal;

r_salario c_salario%rowtype;

Begin
	
-- Utilizando fetch into
Open c_salario;

Fetch c_salario into r_salario;

while (c_salario%found = true) loop
	dbms_output.put_line('Nome: ' || r_salario.ename || ' Salário: ' || r_salario.sal);
	Fetch c_salario into r_salario;
End loop;

Close c_salario;


dbms_output.put_line('-');
dbms_output.put_line('-');
dbms_output.put_line('-');

For r_salario In c_salario Loop
	dbms_output.put_line('Nome: ' || r_salario.ename || ' Salário: ' || r_salario.sal);
End Loop;


End;
```

---

# Function

```
Create Or Replace Function f_livrosVendidos_autor (p_cpfAutor in number) 
	Return NUMBER IS 

v_unidades Number;

Begin

Select sum(quantidade) into v_unidades from venda
	inner join livro_autoria On livro_autoria.codlivro = venda.codlivro
	inner join autor On livro_autoria.matricula = autor.matricula
where autor.cpf = p_cpfautor;

return v_unidades;

End;
```

---
```
Declare
	v_ret number;
Begin

    v_ret := f_livrosVendidos_autor(890001);

	dbms_output.put_line('Unidades vendidas: ' || v_ret);
    
End;
```
