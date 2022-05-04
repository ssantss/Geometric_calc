//square
function square_perimeter (side){
    return side * 4; /* Se calcula el permietro cuadraro */
}

function square_area (side){
    return side * side; /* Se calcula el area de un cuadraro */
}

function calculasCuadrado(){

    //Perimetro
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = "PERIMETRO CUADRADO  " + square_perimeter(value) + "cm";

    document.getElementById('resultado').innerHTML = perimetro;

    //Area
    const value1 = value 
    const area = "AREA CUADRADO  " + square_area(value1) + "cm²";
    document.getElementById('resultado1').innerHTML = area;
}


// Triangle
const pi = Math.PI;

function triangle_perimeter (side0, side1, base){
    return side0 + side1 + base; /* Se calcula el perimetro de un triangulo */
}

function triangle_area(height ,base){
    return (base * height) / 2; /* Area triangulo */
}
// Circle

function circle_diameter(radio){
    return radio * 2; /* Diametro Circulo */
}

function circle_perimeter (radio){
    const diameter = circle_diameter(radio);
    return Math.round(diameter * pi);/* Perimetro circulo */
}
function circle_area(radio){
    return Math.round((radio * radio) * pi); /* Area circulo */
}

