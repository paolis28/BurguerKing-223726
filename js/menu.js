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





