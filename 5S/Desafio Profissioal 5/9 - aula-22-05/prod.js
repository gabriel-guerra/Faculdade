function buildMap (array){

    let map = new Map();   

    for (const a of array){
        if (map.has(a.categoria)){
            let mapValue = map.get(a.categoria)
            mapValue.push(a)
            map.set(a.categoria, mapValue)
        }else{
            map.set(a.categoria, a)
        }
    }

    console.log(map)

}

const a = [
    {nome: "Maçã", categoria: "Fruta"},
    {nome: "Banana", categoria: "Fruta"},
    {nome: "Cenoura", categoria: "Legume"},
    {nome: "Brócolis", categoria: "Legume"},
    {nome: "Laranja", categoria: "Fruta"},
]

buildMap(a);
