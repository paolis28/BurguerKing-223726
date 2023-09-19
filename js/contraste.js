const switchAltoContraste = document.getElementById('switchAltoContraste');
const footer = document.querySelector('footer');
const linkas = document.querySelectorAll('.linka');
const linOtro = document.querySelectorAll('.linOtro');

switchAltoContraste.addEventListener('change', function() {
    if (this.checked) {
        footer.classList.add('alto-contraste');
        linkas.forEach(linka => {
            linka.classList.add('contrasrtelinka');
        });
        linOtro.forEach(linOtro => {
            linOtro.classList.add('contralin');
        });
    } else {
        footer.classList.remove('alto-contraste');
        linkas.forEach(linka => {
            linka.classList.remove('linka');
        });
        linOtro.forEach(linOtro => {
            linOtro.classList.add('contralin');
        });
    }
});
