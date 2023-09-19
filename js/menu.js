function cambiarColorDesplazar() {
var menuLinks = document.querySelectorAll('.menu-link');
window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var activeLink = null;

    menuLinks.forEach(function(link) {
        var seccionId = link.getAttribute('href').substring(1); 
        var seccion = document.getElementById(seccionId);

        if (seccion && scrollPos >= seccion.offsetTop -20 && scrollPos < (seccion.offsetTop + seccion.offsetHeight - 50)) {
            activeLink = link;
        }
    });

    menuLinks.forEach(function(link) {
        if (link === activeLink) {
            link.style.backgroundColor = 'rgb(218, 5, 5)';
            link.style.color = 'white';
            link.style.borderRadius = '12px'; 
            link.style.weight='bold';
            link.style.padding='4px';
        } else {
            link.style.backgroundColor = '';
            link.style.color = '';
        }
    });
});


menuLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

        var seccionId = link.getAttribute('href').substring(1);
        var seccion = document.getElementById(seccionId);

        if (seccion) {
            seccion.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

}
// const menuItems = {
//     img1: {
//         name: "Stacker Chipotle Triple",
//         description: "Una deliciosa hamburguesa con triple carne y aderezo chipotle."
//     },
//     img2: {
//         name: "Stacker Chipotle Cuádruple",
//         description: "Una hamburguesa cargada con cuádruple carne y salsa chipotle."
//     },
// };

// function mostrarInfoProducto(imagenProducto) {
//     const nombreProducto = imagenProducto.getAttribute("data-nombre");
//     const descripcionProducto = imagenProducto.getAttribute("data-descripcion");
//     const rutaImagenProducto = imagenProducto.getAttribute("src");
    
//     // Actualiza los elementos de la página "Menú" con la información del producto seleccionado
//     const productoImagen = document.getElementById("productoImagen");
//     const productoNombre = document.getElementById("productoNombre");
//     const productoDescripcion = document.getElementById("productoDescripcion");
    
//     productoImagen.src = rutaImagenProducto;
//     productoNombre.textContent = nombreProducto;
//     productoDescripcion.textContent = descripcionProducto;
    
//     // Muestra el área de información del producto
//     const productoInfo = document.getElementById("productoInfo");
//     productoInfo.style.display = "block";
// }






