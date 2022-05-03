//square
function square_perimeter (side){
    return side * 4; /* Se calcula el permietro cuadraro */
}

function square_area (side){
    return side * side; /* Se calcula el area de un cuadraro */
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