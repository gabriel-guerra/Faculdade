const fs = require('fs');

function escreverArquivoCallback(nomeArquivo, dados, callback) {
    console.log(`Escrevendo dados no arquivo ${nomeArquivo}...`)
    fs.writeFile(nomeArquivo, dados, (error) => {
        if(error) {
            console.error(`Erro ao escrever dados no arquivo ${nomeArquivo}:`, error)
            callback(error);
        } else {
            console.log(`Dados escritos no arquivo ${nomeArquivo} com sucesso.`);
            callback(null);
        }
    })
}

function lerArquivoCallback(nomeArquivo, callback) {
    console.log(`Lendo dados do arquivo: ${nomeArquivo}`)
    fs.readFile(nomeArquivo, 'utf-8', (error, data) => {
        if(error) {
            console.error(`Erro ao ler dados do arquivo ${nomeArquivo}`, error)
            callback(error, null)
        } else {
            console.log(`Dados lidos do arquivo ${nomeArquivo}`)
            callback(null, data)
        }
    })
}

async function getPokemonDataWithCallbacks() {
    console.log("Aguardando retorno da Poke API")
    fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((response) => response.json())
    .then(formatApiResponse).catch((error) => {
            console.error("Erro ao obter dados do pokemon", error)
        })
}


async function formatApiResponse(data){
    
    const pokemonInfo = {
        nome: data.name,
        tipos: data.types.map(type => type.type.name),
        peso: data.weight,
        altura: data.height
    }

    const pokemonData = JSON.stringify(pokemonInfo, null, 2)
    
    escreverArquivoCallback('pokemon.json', pokemonData, callbackWriteLocalFile)

}


async function callbackWriteLocalFile (error) {
    if(error) {
        console.error('Erro ao escrever dados do pokemon', error)
    } else {
        console.log("Pokemon cadastrado")
        lerArquivoCallback('dados.txt', callbackReadLocalFile)
    }
}

async function callbackReadLocalFile(error, dadosArquivoLocal){
    if(error) {
        console.error('Erro ao ler arquivo dados.txt', error)
    } else {
        console.log(`conteudo do arquivo dados.txt`, dadosArquivoLocal)
        lerArquivoCallback('pokemon.json', callback3)
    }
}

async function callback3 (error, dadosPokemonSalvo){
    if(error) {
        console.error('Erro ao ler dados do pokemon', error)

    } else {
        console.log("Conteudo do arquivo pokemon", dadosPokemonSalvo)
    }
}


getPokemonDataWithCallbacks();