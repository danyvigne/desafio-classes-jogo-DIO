class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


    ataque(){
        if(this.tipo == "mago"){
            let golpe = "magia";
            console.log(`O ${this.tipo} atacou usando ${golpe}`)

        } else if(this.tipo == "guerreiro"){
            let golpe = "espada";
            console.log(`O ${this.tipo} atacou usando ${golpe}`)

        } else if(this.tipo == "monge"){
            let golpe = "artes marciais"
            console.log(`O ${this.tipo} atacou usando ${golpe}`)

        } else if(this.tipo == "ninja"){
            let golpe = "shuriken"
            console.log(`O ${this.tipo} atacou usando ${golpe}`)

        } else {
            console.log("tipo inexistente, tente novamente")
        }
    }
}


let ninja = new heroi("Gatuno", "25", "ninja")

console.log(ninja)
console.log(ninja.ataque())

let guerreiro = new heroi("Arthur", "30", "guerreiro")

console.log(guerreiro)
console.log(guerreiro.ataque())

let mago = new heroi("Gul’Dan", "130", "mago")

console.log(mago)
console.log(mago.ataque())

let monge = new heroi("Gandhi", "78", "monge")

console.log(monge)
console.log(monge.ataque())