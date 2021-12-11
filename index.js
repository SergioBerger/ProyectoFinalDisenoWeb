function mostrarMensaje(evento){
    evento.preventDefault();
    var ciudad = document.querySelector("#ciudad").value;
    var resultado = calcular(ciudad);
    document.querySelector("#distancia").textContent = resultado;
}


function calcular (ciudad) {
    var distancia = ""
    switch(ciudad){
        case "Resistencia":
            distancia = "6.7 km";
            break;
        case "Puerto Vilelas":
            distancia = "3 km";
            break;
        case "Corrientes":
            distancia = "9.1 km";
            break;
        case "Fontana":
            distancia = "12.7 km";
            break;
        case "Puerto Tirol":
                distancia = "19.8 km";
            break;
        case "Riachuelo":
                distancia = "21.4 km";
            break;
    }
    console.log("calcular ok");
    console.log("calcular 2 ok");
    console.log(distancia);
    return distancia;
}

function ejecutar(){
   
    var formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", mostrarMensaje);
    console.log("ejecutar ok");
}

ejecutar();

function mostrarMensaje2(evento){
    evento.preventDefault();
    var ciudad2 = document.querySelector("#ciudad2").value;
    var resultado = calcular2(ciudad2);
    document.querySelector("#calculo2").textContent = resultado;
}


function calcular2 (ciudad2) {
    var distancia = ""
    switch(ciudad2){
        case "Buenos Aires":
            distancia = "795 km";
            break;
        case "Rosario":
            distancia = "631 km";
            break;
        case "Córdoba":
            distancia = "671 km";
            break;
        case "Salta":
            distancia = "714 km";
            break;
        case "San Miguel de Tucumán":
                distancia = "627 km";
            break;
        case "La Plata":
                distancia = "833 km";
            break;
    }
    console.log("calcular ok bis");
    console.log("calcular 2 ok bis");
    console.log(distancia);
    return distancia;
}

function ejecutar2(){
   
    var formulario = document.querySelector("#formulario2");
    formulario.addEventListener("submit", mostrarMensaje2);
    console.log("ejecutar ok bis");
}

ejecutar2();