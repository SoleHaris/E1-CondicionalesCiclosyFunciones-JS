// 1 - Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function indicaParOImpar ( num ) {
    const par = num % 2 === 0 
    if ( par ) 
        console.log ( `El número ${num} es par.` );
    else {
        console.log ( `El número ${num} es impar.`);
    }    
}

indicaParOImpar ( 2 );

// 2 - Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function numeroMayor ( num1, num2 ) {
    if ( num1 > num2 ) {
        console.log ( `El número ${num1} es mayor que el número ${num2}.` );
    }
    else if ( num1 == num2 ) {
        console.log ( `Los números son iguales.`);
    }
    else {
        console.log ( `El número ${num2} es mayor que el número ${num1}.` );
    } 
}

numeroMayor (3, 2);

// 3 - Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDe5 ( num ) {
    const multiplo = num % 5 === 0
    if (multiplo) {
        console.log ( `El número ${num} es múltiplo de 5.` );
    }
    else {
        console.log ( `El número ${num} no es múltiplo de 5.` );
    }
}

multiploDe5 (2);

// 4 - Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirNumeros (num) {
    for (let i = 0; i <= num; i++) {
        console.log ( i );
    }
}

imprimirNumeros (6);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabra (palabra, cant) {
    for (let i = 1; i <= cant; i++) {
        console.log( i + " " + palabra );
    }
}            

imprimirPalabra ("hola", 4);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let nombres = [ "Ramón","Soledad", "Micaela", "Jorge", "Gabriel", "Sebastián" ];

function valoresArray ( nombres ) {
    for (let i = 0; i < nombres.length; i++) {
        console.log ( nombres[i] );
    }
}

valoresArray ([nombres]);


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function posiciónCinco (arrayNum) {
    for (let i = 0; i < arrayNum.length; i++) {
        if (i !== 4)
            continue;
        console.log(arrayNum [i]);
    }
}

posiciónCinco ([arrayNum]);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.