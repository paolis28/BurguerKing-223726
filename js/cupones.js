var imagenes = document.querySelectorAll("img");
var imagengrande = document.createElement("img");
var tituloGrande = document.createElement("h4");
var descripciongrande = document.createElement("p");

var mostrarFotoGrande = (f) => {
    switch (f.target.id) {
        case "1":
            cambioImagen("1", "10 Nuggets 2x1 + Refresco",
            "20 nuggets y Refresco chico por $89. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "2":
            cambioImagen("2", "2 Whopper Jr. + Cono + Refresco + Papas","2 Whopper Jr, cono sencillo,refresco chico y papas chicas por $89. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "3":
            cambioImagen("3", "2 papas medianas","2 Papas Medianas por $39. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "4":
            cambioImagen("4","Hamburguesa con queso + Papas + Cono","Hamburguesa con queso, papas chicas y cono sencillo por $59. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "5":
            cambioImagen("5","Whopper + 2 Whopper Jr. + King de Pollo + 3 Papas","Whopper sin queso, 2 Whopper Jr. sin queso, King de Pollo y 3 papas chicas por $219. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "6":
            cambioImagen("6","Whopper + 1 King de Pollo + 5 Nuggets + 2 Refresco","Whopper, King de Pollo, 5 nuggets y 2 refrescos chicos por $174. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "7":
            cambioImagen("7","2 Sundae Jr.","2 Sundae Jr. de cualquier sabor por $29. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "8":
            cambioImagen("8","Whopper + Crispy Chicken + Whopper Jr. + 10 Nuggets + 2 Papas","Whopper sin queso, Crispy Chicken, Whopper Jr, 10 nuggets y 2 papas chicas por $199. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "9":
            cambioImagen("9","10 Nuggets + Aros Medianos","10 nuggets y 1 aros medianos por $64. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "10":
            cambioImagen("10","Cono Relleno + Sundae Jr.","Cono sencillo y Sundae Jr de cualquier sabor por $23. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "11":
            cambioImagen("11","Whopper + Hamburguesa con queso + 10 Nuggets + 2 Papas + 2 Conos","Whopper sin queso, Hamburguesa con queso, 10 nuggets, 2 papas chicas y 2 conos sencillos por $199. Válido del 06 de Febrero al 9 de Julio de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "12":
            cambioImagen("12","3 Papas Grandes","3 papas grandes por $79. Válido del 06 de Febrero al 9 de Julio de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "13":
            cambioImagen("13","Pay de Manzana+ Sundae Jr.","Pay de manzana y Sundae Jr. de cualquier sabor por $34. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "14":
            cambioImagen("14","Combo 10 Nuggets + Combo Whopper","Combo 10 nuggets chico y combo Whopper sin queso por $179. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "15":
            cambioImagen("15","Combo 10 Nuggets + Combo Whopper Jr. + 2 Conos","Combo 10 nuggets chico, combo Whoppper Jr. sin queso y 2 conos sencillos por $149. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "16":
            cambioImagen("16","5 Nuggets + Cono + Papas medianas","5 nuggets, cono sencillo y papas medianas por $49. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "17":
            cambioImagen("17","Whopper + Whopper Jr. + 5 Nuggets + 2 Papas + Refresco + 2 Sundae Jr.","Whopper sin queso, Whopper Jr. in queso, 5 nuggets, 2 papas chicas, ref chicos y 2 sundae Jr. de cualquier sabor por $199. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "18":
            cambioImagen("18","Jugo de Naranja + Pay","Jugo de naranja y pay de cualquier sabor por $44. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "19":
            cambioImagen("19","2 Combo Whopper Vegetal + Cono","2 Combo Whopper vegetal y cono sencillo por $189. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "20":
            cambioImagen("20","Aros Medianos + Papas medianas + 5 Nuggets","Aros med, papas med y 5 nuggetspor $64. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "21":
            cambioImagen("21","10 Nuggets + Whopper Jr. + King de Pollo Guacamole + 2 refrescos","10 nuggets, Whopper Jr sin queso, King Pollo Guacamole y 2 refrescos chicos por $245. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "22":
            cambioImagen("22","2 Combo Whopper + 6 Nuggets","2 combos Whopper sin queso chicos y 6 nuggets por $189. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "23":
            cambioImagen("23","2 Whopper + 2 King de Pollo + 4 Papas","2 Whopper sin queso, 2 King de Pollo y 4 papas chicas por $299. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "24":
            cambioImagen("24","King Fusion Nutella o Crunch + Sundae","King Fusion Nutella o Crunch y Sundae de cualquier sabor por $59. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "25":
            cambioImagen("25","Papas + Cono","Papas medianas y cono sencillo por $28.Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "26":
            cambioImagen("26","Whopper + Crispy Chicken + 10 Nuggets + 2 Papas + 2 Conos","Whopper sin queso, Crispy Chicken, 10 nuggets, 2 papas kids y 2 conos sencillos por $189. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "27":
            cambioImagen("27","Whopper + Crispy Chicken + Hamburguesa con queso + 3 Papas + 3 Conos","Whopper sin queso, Crispy Chicken, Hamburgesa con queso, 6 Nuggets, 3 papas kids y 3 conos sencillos por $199. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "28":
            cambioImagen("28","Whopper + Whopper Jr. + King de Pollo + 6 Nuggets + 2 Papas + 2 Refrescos","Whopper sin queso, Whopper Jr. sin queso, King de Pollo, 6 nuggets, 2 papas chicas, 2 refrescos chicos por $229. Válido del 06 de Febrero al 9 de Julio de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "29":
            cambioImagen("29","10 Nuggets + 2 Papas Medianas + 2 Conos","10 nuggets, 2 papas medianas y 2 conos sencillos por $99. Válido del 06 de Febrero al 25 de Junio de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "30":
            cambioImagen("30","Combo King de Pollo + Cono","Combo King de Pollo chico y cono sencillo por $94. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "31":
            cambioImagen("31","Combo Whopper + Cono","Combo Whopper sin queso chico y cono sencillo por $99. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "32":
            cambioImagen("32","Hamburguesa con queso + Refresco + 10 Nuggets + Cono","Hamburguesa con queso, refresco chico, 10 Nuggets y cono sencillo por $99. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "33":
            cambioImagen("33","Combo Whopper + Combo Crispy Chicken con queso","Combo Whopper sin queso chico y Combo Crispy Chicken con queso chico por $149. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "34":
            cambioImagen("34","Family King: Whopper + Whopper Jr. + King de Pollo + Aros de cebolla + 2 papas ch + 2 Conos","Whopper sin queso, Whopper Jr. Sin queso, King de Pollo, aros de cebolla chicos, 2 papas chicas y 2 conos sencillos por $199. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "35":
            cambioImagen("35","2 Conos Sencillo","2 Cono sencillos por $14. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "36":
            cambioImagen("36","Whopper Jr. o Crispy Chicken con queso + Papas + Refresco + 3 Nuggets + Cono","Whopper Jr sin queso o Crispy Chiken con queso, papas kids, refresco chico, 3 piezas nuggets y cono sencillo por $79. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "37":
            cambioImagen("37","Croissandwich + Papas hashbrown + Jugo de Naranja","Croissandwich, papas hashbrown chicas y jugo de naranja por $99. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        case "38":
            cambioImagen("38","Combo Guacamole Crunch + Cono","Combo Guacamole Crunch chico y cono sencillo por $169. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o descuentos.");
        break;

        default:
            break;
    }
};

var cambioImagen = (id, titulo, descripcion) => {
    var marco = document.getElementById("marco");
    var source = document.getElementById(id).getAttribute("src");

    imagengrande.setAttribute("src", source);
    imagengrande.classList.add("expandir");

    tituloGrande.textContent = titulo;
    tituloGrande.style.fontSize = "2.5em";
    tituloGrande.style.fontFamily = 'Arial, Helvetica, sans-serif';

    descripciongrande.textContent=descripcion;
    descripciongrande.style.fontSize = "120%";
    descripciongrande.style.color='#502314';

    marco.innerHTML = ''; 
    marco.appendChild(imagengrande);
    marco.appendChild(tituloGrande); 
    marco.appendChild(descripciongrande); 
};

imagenes.forEach((i) => {
    i.addEventListener("click", mostrarFotoGrande);
});

let botonSeleccionado = null;

function mostrarBt(boton) {
    if (botonSeleccionado) {
        botonSeleccionado.style.border = '2px solid white'; 
    }

    document.getElementById("btDescargar").style.opacity=2  ;
    boton.style.border = '2px solid red'; 
    botonSeleccionado = boton;
}
