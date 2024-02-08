
public class Main {
    public static void main(String[] args) {

        Pessoa p1 = new Pessoa("Gabriel");
        Pessoa p2 = new Pessoa("João", "25/07/1980");
        Pessoa p3 = new Pessoa("Maria", "01/04/1997", 26);

        System.out.println("Nome: " + p1.getNome());

        System.out.println("Nome: " + p2.getNome());
        System.out.println("Data Nascimento: "+ p2.getDataNascimento());

        System.out.println("Nome: " + p3.getNome());
        System.out.println("Data Nascimento: "+ p3.getDataNascimento());
        System.out.println("Idade: "+ p3.getIdade());
    }
}