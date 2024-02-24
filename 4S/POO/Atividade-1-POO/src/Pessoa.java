
public class Pessoa {

    private String nome;
    private String dataNascimento;
    private int idade;

    public Pessoa (String nome){
        this.nome = nome;
    }

    public Pessoa (String nome, String dataNascimento){
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    public Pessoa (String nome, String dataNascimento, int idade){
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.idade = idade;
    }

    public String getNome() {
        return this.nome;
    }

    public String getDataNascimento() {
        return this.dataNascimento;
    }

    public int getIdade() {
        return this.idade;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
