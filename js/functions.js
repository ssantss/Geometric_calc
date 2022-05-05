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
    const perimetro = "PERIMETRO CUADRADO  " + square_perimeter(value) + " cm.";
    

    document.getElementById('resultado').innerHTML = perimetro;

    //Area
    const value1 = value 
    const area = "AREA CUADRADO  " + square_area(value1) + " cm².";
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

function calculosTriangulo(){
    const input = document.getElementById("InputTriangulo_ladoa");
    const lado_a =  parseInt(input.value);
    

    const input2 = document.getElementById("InputTriangulo_ladob");
    const lado_b = parseInt(input2.value);

    const input3 = document.getElementById("InputTriangulo_base");
    const base1 = parseInt(input3.value);

    const input4 = document.getElementById("InputTriangulo_altura");
    const altura = parseInt(input4.value);

    perimeter = "PERIMETRO TRIANGULO " + triangle_perimeter(lado_a,lado_b,base1) + " cm."
    document.getElementById('resultado_triangle').innerHTML = perimeter;

    area = "AREA TRIANGULO " + triangle_area(altura,base1) + " cm²."
    document.getElementById('resultado_triangle1').innerHTML = area;

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

function calculosCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const value1 = value;
    const value2 = value;
    const diameter = "DIAMETRO CIRCULO " + circle_diameter(value) + " cm."
    document.getElementById('resultado_circle0').innerHTML = diameter;
    
    const perimeter = "PERIMETRO CIRCULO " + circle_perimeter(value1) + " cm."
    document.getElementById('resultado_circle1').innerHTML = perimeter;

    const area = "AREA CIRCULO " + circle_area(value2) + " cm²."
    document.getElementById('resultado_circle2').innerHTML = area;

    
}


//Funcion enter
function enter_cuadrado (ele) {
    if(event.key === 'Enter') {
        calculasCuadrado();        
    }
}

function enter_circulo (ele) {
    if(event.key === 'Enter') {
        calculosCirculo();        
    }
}

function enter_triangulo (ele) {
    if(event.key === 'Enter') {
        calculosTriangulo();        
    }
}
