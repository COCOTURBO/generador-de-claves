let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena')

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPORSTUVWXYZabcdefghijk1mnopqrstuvwxyz8123456789!@uSX^&*()';

function generar(){
    
    let numeroDigitado = parseInt (cantidad.value);
    
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor a 8");
    }
    
let password = '';
    for(let i= 0; i < numeroDigitado; i++){
        
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;


    }

    contrasena.value = password;

}








