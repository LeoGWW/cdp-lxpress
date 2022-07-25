//-----------------------------
//index2316.HTML
const getPagesValue = () =>{
  let inputValue = document.getElementById("pagesValue").value;
  document.getElementById("pages").innerHTML = inputValue;
}

const getBookValue = () =>{
  let inputValue = document.getElementById("bookValue").value;
  document.getElementById("books").innerHTML = inputValue;
}

const getWidthInput = () =>{
    let inputValue = document.getElementById("widthValue").value; 
    document.getElementById("width").innerHTML = inputValue; 
}

  const getHeightValue = () =>{
    let inputValue = document.getElementById("heightValue").value; 
    document.getElementById("height").innerHTML = inputValue; 
  }  

//-----------------------------
//-------- Obtener 1eros datos.
const getWidthInput1 = () =>{
  let inputValue = document.getElementById("widthValue").value; 
  document.getElementById("widthvaluepasado1").innerHTML = inputValue; 
}

const getHeightValue1 = () =>{
  let inputValue = document.getElementById("heightValue").value; 
  document.getElementById("heightvaluepasado1").innerHTML = inputValue; 
}  

const getResmaValue1 = () =>{
  let inputValue = document.getElementById("gettResmaValue").value; 
  document.getElementById("resmaValuepasado1").innerHTML = inputValue;
}  

const getTapaValue = () =>{
  let inputValue = document.getElementById("tapaValue").value; 
  document.getElementById("resmaValuepasado1").innerHTML = inputValue;
}  
//-----------------------------
//---------- Obtener 2dos datos
const getWidthInput2 = () =>{
  let inputValue = document.getElementById("widthValue").value; 
  document.getElementById("widthvaluepasado2").innerHTML = inputValue; 
}

const getHeightValue2 = () =>{
  let inputValue = document.getElementById("heightValue").value; 
  document.getElementById("heightvaluepasado2").innerHTML = inputValue; 
}  

const getResmaValue2 = () =>{
  let inputValue = document.getElementById("gettResmaValue").value; 
  document.getElementById("resmaValuepasado2").innerHTML = inputValue;
} 
//-----------------------------
//-------- Funciones de cálculo
function pliegos(){
  var pliegos = document.getElementById("pagesValue").value;
  var libros = document.getElementById("bookValue").value;
  var valorResma = document.getElementById("gettResmaValue").value; 
  var valorTapa = document.getElementById("tapaValue").value;
  var resultadoround = Math.ceil(pliegos/32);
  let cantPliegos = resultadoround * libros;
  var cantResma = cantPliegos / 500;
  var tapas = libros;
  var primerprecio = cantResma * valorResma;
  document.getElementById("pliegosAmount").innerHTML = resultadoround;
  document.getElementById("librosxPliego").innerHTML = cantPliegos;
  document.getElementById("cantResma").innerHTML = cantResma;
  document.getElementById("primerprecio").innerHTML = primerprecio;
  document.getElementById("tapas").innerHTML = valorTapa;
  if(libros>=30 && libros<=49) {
    let preciofinal1 = (primerprecio * 4.5) + (valorTapa * tapas);
    var preciofinal = preciofinal1 - ((preciofinal1 * 2) / 100); 
    var coeficiente = "4.5";
  }
  else if(libros>=50 && libros<=74) {
    let preciofinal1 = (primerprecio * 4.4) + (valorTapa * tapas);
    var preciofinal = preciofinal1 - ((preciofinal1 * 2) / 100); 
    var coeficiente = "4.4";
  }
  else if(libros>=75 && libros<=99) {
    let preciofinal1 = (primerprecio * 4.3) + (valorTapa * tapas);
    var preciofinal = preciofinal1 - ((preciofinal1 * 2) / 100); 
    var coeficiente = "4.3";
  }
  else if(libros>=100 && libros<=149) {
    let preciofinal1 = (primerprecio * 4.2) + (valorTapa * tapas);
    var preciofinal = preciofinal1 - ((preciofinal1 * 2) / 100); 
    var coeficiente = "4.2";
  }
  else if(libros>=150 && libros<=199) {
    let preciofinal1 = (primerprecio * 4.1) + (valorTapa * tapas);
    var preciofinal = preciofinal1 - ((preciofinal1 * 2) / 100); 
    var coeficiente = "4.1";
  }
  else if(libros>=200) {
    let preciofinal1 = (primerprecio * 4) + (valorTapa * tapas);
    var preciofinal = preciofinal1 - ((preciofinal1 * 2) / 100);
    preciofinal = Math.ceil(preciofinal); 
    var coeficiente = "4";
  }
  document.getElementById("preciofinal").innerHTML = preciofinal;
  document.getElementById("coeficiente").innerHTML = coeficiente;
  
}
