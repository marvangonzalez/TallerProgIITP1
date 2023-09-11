const fs = require('fs');

const leerArchivoComoString = () => {
    fs.readFile('ej.txt', 'utf8', (err, texto) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(texto)
      return texto
    });
    
    }
    leerArchivoComoString()

const escribirTextoEnArchivo = (archivo, texto, flag) => {
    if ( fs.existsSync(archivo) || flag){
        fs.writeFile(archivo, texto, err => {
            if (err) {
              console.error(err);
            }
            console.log("Se agrego texto al archivo")
          });

    } else {
        console.log("El archivo no existe o no se encontro")
    }
}

escribirTextoEnArchivo("ej.txt", "prueba nueva", true)
leerArchivoComoString()

const transformarStringEnArrayDeNumeros = (texto, separador) => {
    const array = texto.split(separador)
    let resultado = []
    for (let item of array){
        num = Number(item)
        if (!isNaN(num)){
            resultado.push(num)
        }
    }
    console.log(resultado)
}
texto = "1234-5678- !op- qwerty- 91011"
transformarStringEnArrayDeNumeros(texto, "-")


const transformarArrayDeNumerosAUnSoloString = (array, separador) => {
    var res = ""
    for(let i=0; i<array.length; i++){
        res += array[i]
        if (i != array.length-1){
            res += separador
        }
    }
    console.log(res)
}

transformarArrayDeNumerosAUnSoloString([1234, 5678, 9101, 1121], "-")

const combinarDosArrays = (array1, array2)=> {
    const combinado = [...array1, ...array2]
    var res = []
    for (let item of combinado){
        if (!res.includes(item)){
            res.push(item)
        }
    }
    var mostrarres = res.sort((a, b) => a - b)
    console.log(mostrarres)
  }
const arr1 = [33, 0, 1, 11, 15, 7, 9, 3]
const arr2 = [2, 3, 4, 5, 66, 87, 23]
var resultado = combinarDosArrays(arr1, arr2)

const combinarNArrays = (array) => {
    var input = array.flat()
    var res = []
    for (let item of input){
        if (!res.includes(item)){
            res.push(item)
        }
    }
    var mostrarres2 = res.sort((a, b) => a - b)
    console.log(mostrarres2)
}

resultado = combinarNArrays( [[3, 133, 0], [2], [55], [6, 7, 13, 2], [], [42,13]])
