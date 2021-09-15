/*
Ejercicio 1: crear una función que multiplique dos números y que cuando ejecute esta función me devuelva el resultado de la multiplicación. Debe ejecutarse con cualquier número

1- crear una función
2- recibe dos números
3- multiplicar los dos números
4- entregar el resultado

*/

//Opción 1
const multiply = (numberOne, numberTwo) => {
    return numberOne * numberTwo;
}

//Opción 2
const multiply = (numberOne, numberTwo) => {
    let result = numberOne * numberTwo;
    return result;
}

/*
Ejercicio 2:

Un grupo de amigues va a un evento. Tienen que sentarse en orden de lista. 
Escribir una función donde dado el nombre de la persona puedas indicar el asiento en el que le toca sentarse (el número de asiento corresponde a la posición del nombre en la lista).
Nota: La numeración de los asientos comienza en 1.
Si la persona no tiene asiento devuelve 0;

1- Crear una función que se llame numeroDeAsiento y reciba un parámetro.
2- El parámetro pasado debe ser string.
3- Necesitamos un listado de nombres que debe estar guardado en una variable que se llamará let listFriends.
4- Este lsitado se va a componer de un arreglo con varios string dentro.
5- Recorrer la lista buscando el nombre.
6- En el recorrido busque la coincidencia entre el nombre y los nombres dentro del arreglo.
7- Indicar posición de la coincidencia dentro del arreglo + 1.
8-Sino encuentra coincidencia entre los nombres y los elementos que hay dentro del arreglo, tiene que devolver 0.
*/

//Primera versión
function sitNumber(personName) {
    let listFriends = ["Anita", "María", "Juan", "Amanda", "Daniela", "Marco", "Macarena ", "Tomás","Fritza"];
       for(let i = 0; i < listFriends.length; i++) { 
           if(listFriends[i] === personName) {
            return i+1;
           }
       }
    return 0;
}
   
// En esta función resolvimos el problema usando en nuestro código "index.Of":
function sitNumber(personName) {
    let listFriends = ["Anita", "María", "Juan", "Amanda", "Daniela", "Marco", "Macarena ", "Tomás","Fritza"];
    if (listFriends.indexOf(personName) === -1) {
        return 0;
    }  
   return listFriends.indexOf(personName) + 1;
}

/*
Ejercicio 3:

Escribir una función que recibe un arreglo de números y devuelve un nuevo arreglo solo con los números pares
*/