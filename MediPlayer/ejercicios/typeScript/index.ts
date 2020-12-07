//Boolean
// Con esto damos por entendido que tipo es
/* let muted = true */


// Con TypeScript podemos ser mas explicitos
let muted: boolean = true 
muted = false

//Numeros
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

// String
let nombre: string = "Richard"
let saludo = 'Me llamo ${nombre}'

// Arreglos
let people: string [] = []
people = ["Isabel", "Nicole", "Raul"]
let peopleAndNumbers: Array < string | number >
peopleAndNumbers.push('Ricardo')
peopleAndNumbers.push(9001)

// Enum - Es un tipo especial llamdo enumeracion
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Rojo
console.log(`Mi color favorito es ${colorFavorito}`)

// any - Cualquier tipo
let comodin: any = 'Joker'
comodin = { type: 'Wilcard'}

// Object
let someObject: object = { type: 'Wilcard'}