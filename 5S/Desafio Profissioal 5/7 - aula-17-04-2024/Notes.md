# Requests e carga

- 7k requests
- 20s
- 457 falhas

1371 por minuto
82260 por hora
1.974.240 por dia
13.819.680 por semana

# Cluster
"Vários computadores juntos trabalhando como um só".
"Vários computadores utilizando a mesma memória".

Métodos de cluster
- Clonagem
- Separação
- 

# Clonagem
No node, a aplicação está rodando e um processo. (PID -> process id). A ideia é clonar a aplicação para subprocessos filhos de modo que seja feito um balanceamento de carga. 
Então, quando a aplicação chegar em uma capacidade (ex: 70%), o sistema começa a distribuir entre outros processos.

O node utiliza o child process, e o cluster faz parte desse child process. Ao criar um cluster, o sistema parte de um processo pai e faz o balanceamento.


