var minimo = 1;
var maximo = 50;
var aleatorio = Math.floor(Math.random() * maximo - minimo +1) + minimo;
var intentos = 0;
var nombreUsuario = prompt("Bienvenidos a este juego, ingresa tu nombre");
var numero;


for(intentos; intentos < 10; intentos++){
    numero = parseInt(prompt(nombreUsuario+" , Ingresa un numero entre el "+minimo+" y el "+maximo));

    if(numero >= minimo && numero <= maximo){
            if(numero < aleatorio){
                alert("Estas cerca! pero el numero es mas alto");
            } else if(numero > aleatorio){
                alert("Estas cerca! pero el numero es mas bajo");
            } else if(numero == aleatorio){
                break;
            }
    }   else{
            alert("Ingresa un numero entre "+minimo+" y "+maximo);
    }
}

if(numero == aleatorio){
    alert("Excelente! adivinaste el numero en "+intentos+" intentos");
} else{
    alert("Ya no te quedan mas intentos, suerte en la proxima!")
}