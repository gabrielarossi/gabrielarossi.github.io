//taller codigo con aaron 
//2016 07 19
//lienzo deun color solido y elipse que siga el mouse

//funcion setup, corre una vez y al principio
function setup() {
  //crea un lienzo donde dibujar
  //createCanvas(dimHor , dimVer)
  createCanvas(800, 600);
  //pinta el fondo del lienzo
  //backgroung(red, green, blue);
  background(900, 255, 0);
}

//variables
//una variable es un lugar en la memoria del computador
//donde podemos almacenar datos
//declarar declarar significado crear una variable
//declarar solo se hace una vez
var diametro;
//luego declarar, podemos darle valores
//sdignar sig ifica darle un valor a la variable
//se puede hacer cuantas veces quieran
//la variable simpre va a tener un valor actual
//que va a ser igual a la ultima asignacion
diametro = 100;

//manera corta de declarar ya signae un valor inicial
//incisto solo declarar una vez
var x = 100

//asignarle otro valor
x = 50;

//funcion draw, corre despues de setup, 60 veces por segundo
function draw() {
  
  //definimos el estilo de la elipse
  estiloElipse();
  
  //elipse en el lienzo
  //ellipse(postHorizontal, posVertical, widht, height)
  ellipse(mouseX, mouseY, mouseX, 100);

  
  //arco en el lienzo 
  arc(50, 55, 50, 50, 0, HALF_PI);
fill(200, 60, 70, 60);
stroke(59, 48, 80, 79)
arc(80, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI+QUARTER_PI);
arc(50, 55, 100, 80, PI+QUARTER_PI, TWO_PI);

  
}

//mousePressed() se ejecuta cuando
//el mouse es precionado
function mousePressed() {
  background(900, 255, 0);
}

//declaracion de la funcion estioElipse
//elige el pincel para crear elipse
function estiloElipse() {
   //configuracion de dibujo de la elipse
   
  //stroke elige el color del borde
  //stroke(red, green, blue)
  stroke(255, 0, 255);
  
  //strokeWeight determina el grosor del borde
  //strokeWeight(px);
  strokeWeight(2);
  
  //fill() elige el color del relleno de la figura
  //fill/red, green, blue)
  fill(0, 0, 255)
  
  //
  
}
  